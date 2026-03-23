import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

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
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return { title: "Not Found" };

  const content = fs.readFileSync(filePath, "utf-8");
  const titleMatch = content.match(/export const title = ["'](.+?)["']/);
  const summaryMatch = content.match(/export const summary = ["'](.+?)["']/);

  return {
    title: `${titleMatch?.[1] || slug} — Just Code It Academy`,
    description: summaryMatch?.[1] || undefined,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.mdx`);

  if (!fs.existsSync(filePath)) notFound();

  // Dynamic import of the MDX file
  let PostContent;
  try {
    const mod = await import(`@/content/blog/${slug}.mdx`);
    PostContent = mod.default;
  } catch {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const titleMatch = content.match(/export const title = ["'](.+?)["']/);
  const dateMatch = content.match(/export const date = ["'](.+?)["']/);

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
            {dateMatch?.[1] || ""}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-8">
            {titleMatch?.[1] || slug}
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
