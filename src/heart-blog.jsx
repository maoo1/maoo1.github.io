import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import post from "./blog/heart-heart.md?raw";

export default function HeartBlog() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-24 prose prose-zinc">
      <a href="/" className="text-sm underline mb-8 inline-block">
        ← Back to portfolio
      </a>

      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
        {post}
      </ReactMarkdown>
    </main>
  );
}
