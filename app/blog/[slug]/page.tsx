import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Lock to statically generated slugs only — prevents path traversal
export const dynamicParams = false;

type Props = {
  params: Promise<{ slug: string }>;
};

// Matched-quote regex to avoid mismatched open/close quotes
const META_TITLE = /export const title = (["'])(.+?)\1/;
const META_DATE = /export const date = (["'])(.+?)\1/;
const META_SUMMARY = /export const summary = (["'])(.+?)\1/;

function sanitizeSlug(slug: string): string | null {
  // Reject anything with path separators, dots, or non-alphanumeric (except hyphens)
  if (/[^a-zA-Z0-9-]/.test(slug)) return null;
  return slug;
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => ({ slug: f.replace(".mdx", "") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const safe = sanitizeSlug(slug);
  if (!safe) return { title: "Not Found" };

  const filePath = path.join(process.cwd(), "content/blog", `${safe}.mdx`);
  if (!fs.existsSync(filePath)) return { title: "Not Found" };

  const content = fs.readFileSync(filePath, "utf-8");
  const titleMatch = content.match(META_TITLE);
  const summaryMatch = content.match(META_SUMMARY);

  return {
    title: titleMatch?.[2] || safe,
    description: summaryMatch?.[2] || undefined,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const safe = sanitizeSlug(slug);
  if (!safe) notFound();

  const filePath = path.join(process.cwd(), "content/blog", `${safe}.mdx`);
  if (!fs.existsSync(filePath)) notFound();

  // Dynamic import of the MDX file
  let PostContent;
  try {
    const mod = await import(`@/content/blog/${safe}.mdx`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  let title = safe;
  let date = "";
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const titleMatch = content.match(META_TITLE);
    const dateMatch = content.match(META_DATE);
    title = titleMatch?.[2] || safe;
    date = dateMatch?.[2] || "";
  } catch {
    // File read failed — use defaults
  }

  return (
    <main className="bg-white text-gray-900">
      <Nav />

      <article className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <a
            href="/blog"
            className="text-blue-600 text-sm font-medium hover:underline mb-8 inline-block"
          >
            ← Back to Blog
          </a>

          <div className="text-xs text-gray-400 uppercase tracking-widest mb-4">
            {date}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            {title}
          </h1>

          <div className="prose prose-gray max-w-none">
            <PostContent />
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
