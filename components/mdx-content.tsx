"use client"

import mermaid from "mermaid"
import { useEffect } from "react"
import ReactMarkdown from "react-markdown"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import remarkGfm from "remark-gfm"
import remarkMath from "remark-math"
import "katex/dist/katex.min.css"
import type { ComponentProps } from "react"

export function Code({
  className,
  children,
  ...props
}: ComponentProps<"code">) {
  const lang = className?.replace("language-", "")

  useEffect(() => {
    if (lang === "mermaid") {
      mermaid.initialize({ startOnLoad: true, theme: "default" })
      mermaid.run()
    }
  }, [lang])

  if (lang === "mermaid") {
    return <div className="mermaid justify-self-center">{String(children)}</div>
  }

  // fallback: let ReactMarkdown handle normal code blocks
  return (
    <code className={className} {...props}>
      {children}
    </code>
  )
}

export default function Markdown({ source }: { source: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm, remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}
      components={{ code: Code }}
    >
      {source}
    </ReactMarkdown>
  )
}
