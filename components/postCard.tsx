'use client'

import Link from 'next/link'
import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'
import { formatDate } from '@/lib/utils'

export default function PostCard({
	title,
	description,
	date,
	slug,
	readtime
}: PostMetadata) {
	const [hover, setHover] = useState(false)

	return (
		<div
			className={`card bg-base-100 rounded-2xl border shadow-md transition ${
				hover ? 'border-primary shadow-lg' : 'border-transparent'
			}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<Link href={`/posts/${slug}`}>
				<div className="card-body">
					<h3
						className={`card-title text-lg font-semibold ${
							hover ? 'underline underline-offset-2' : ''
						}`}
					>
						{title}
					</h3>
					<p className="text-sm text-gray-400">
						{formatDate(date ?? '')} • {readtime} min read
					</p>
					<p className="mt-2">{description}</p>
				</div>
			</Link>
		</div>
	)
}
