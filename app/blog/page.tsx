import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
  title: "Blog — Just Code It Academy",
  description:
    "Thoughts on AI-native education, building real products with students, and the future of technical training.",
};

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary: string;
};

function getBlogPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "content/blog");

  if (!fs.existsSync(postsDir)) return [];

  const files = fs.readdirSync(postsDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(".mdx", "");
    const content = fs.readFileSync(path.join(postsDir, file), "utf-8");

    // Matched-quote regex to avoid mismatched open/close quotes
    const titleMatch = content.match(/export const title = (["'])(.+?)\1/);
    const dateMatch = content.match(/export const date = (["'])(.+?)\1/);
    const summaryMatch = content.match(/export const summary = (["'])(.+?)\1/);

    return {
      slug,
      title: titleMatch?.[2] || slug,
      date: dateMatch?.[2] || "Unknown",
      summary: summaryMatch?.[2] || "",
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="bg-white text-gray-900">
      <Nav />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-blue-600 text-sm font-semibold uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            Ideas, updates, and lessons.
          </h1>
          <p className="text-gray-600 text-lg mb-16 max-w-xl">
            Thoughts on AI-native education, building real products with students, and what
            we&apos;re learning along the way.
          </p>

          {posts.length === 0 ? (
            <div className="text-center py-16 border border-gray-200 rounded-xl">
              <p className="text-gray-400 text-lg mb-2">No posts yet.</p>
              <p className="text-gray-400 text-sm">Check back soon — we&apos;re working on it.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {posts.map(({ slug, title, date, summary }) => (
                <a
                  key={slug}
                  href={`/blog/${slug}`}
                  className="block p-6 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-sm transition-all"
                >
                  <div className="text-xs text-gray-400 uppercase tracking-widest mb-2">{date}</div>
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
                  {summary && <p className="text-gray-600 text-sm leading-relaxed">{summary}</p>}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
