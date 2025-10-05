'use client'

import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeRaw from 'rehype-raw'
import mermaid from 'mermaid'
import 'katex/dist/katex.min.css'

function Code({ inline, className, children, ...props }: any) {
	const lang = className?.replace('language-', '')

	useEffect(() => {
		if (lang === 'mermaid') {
			mermaid.initialize({ startOnLoad: true, theme: 'default' })
			mermaid.run()
		}
	}, [lang, children])

	if (lang === 'mermaid') {
		return <div className="mermaid">{String(children)}</div>
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
			rehypePlugins={[rehypeKatex, rehypeRaw]} // ✅ allow HTML
			components={{ code: Code }}
		>
			{source}
		</ReactMarkdown>
	)
}
