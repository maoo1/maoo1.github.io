import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";

export default function HeartBlog() {
  const [content, setContent] = useState("");
  const [err, setErr] = useState("");

    useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}blog/heart-heart/heart-heart.md`)
        .then((res) => {
        if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
        return res.text();
        })
        .then(setContent)
        .catch((err) => console.error(err));
    }, []);
    
  return (
    <main className="min-h-screen bg-white text-zinc-900 px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-sm underline mb-10 inline-block hover:text-zinc-600">
          ← Back to portfolio
        </Link>

        {err ? (
          <div className="border border-red-200 bg-red-50 text-red-800 p-4 rounded">
            {err}
          </div>
        ) : content ? (
          <article className="prose prose-zinc max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        ) : (
          <p className="text-zinc-600">Loading…</p>
        )}
      </div>
    </main>
  );
}
