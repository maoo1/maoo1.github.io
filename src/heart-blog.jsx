import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

export default function HeartBlog() {
  const [content, setContent] = useState(null); // null = loading
  const [err, setErr] = useState("");

  useEffect(() => {
    // ✅ This matches what your build actually outputs: dist/blog/heart-heart.md
    const url = `${import.meta.env.BASE_URL}blog/heart-heart.md`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        return res.text();
      })
      .then((text) => setContent(text))
      .catch((e) => {
        console.error(e);
        setErr(`Failed to load markdown: ${String(e)} (URL: ${url})`);
        setContent(""); // stop loading
      });
  }, []);

  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-sm underline mb-10 inline-block hover:text-zinc-600"
        >
          ← Back to portfolio
        </Link>

        {content === null ? (
          <p className="text-zinc-600">Loading…</p>
        ) : err ? (
          <div className="border border-red-200 bg-red-50 text-red-800 p-4 rounded">
            {err}
          </div>
        ) : (
          <article className="prose prose-zinc max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                img: ({ node, ...props }) => (
                  <img
                    {...props}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: 12,
                      display: "block",
                    }}
                    loading="lazy"
                  />
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </article>
        )}
      </div>
    </main>
  );
}
