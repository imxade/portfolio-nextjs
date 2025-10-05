'use client'

import { useState } from 'react'
import { PostMetadata } from '@/lib/posts'
import Posts from '@/components/posts'

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
	const [query, setQuery] = useState('')
	const filtered = posts.filter(post => {
		const q = query.toLowerCase()
		return [
			post.title,
			post.description,
			post.date
			// post.tags?.join(' ')
		]
			.filter(Boolean)
			.some(field => field!.toLowerCase().includes(q))
	})

	const isFiltered = query.length > 0
	function resetFilter() {
		setQuery('')
	}

	return (
		<section className="py-10">
			{/* Header */}
			<div className="mb-8 grid gap-3 px-4 text-left md:container md:mx-auto md:text-center">
				<h1 className="from-primary bg-gradient-to-r to-gray-400 bg-clip-text pb-[2px] text-2xl leading-tight font-bold text-transparent md:text-5xl">
					Posts
				</h1>
			</div>

			{/* Search bar with reset */}
			<div className="mb-12 flex items-center justify-center gap-3">
				<input
					type="text"
					placeholder="Search posts..."
					className="input w-4/5"
					value={query}
					onChange={e => setQuery(e.target.value)}
				/>
			</div>

			{/* Post list */}
			<Posts posts={filtered} />
		</section>
	)
}
