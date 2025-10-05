import Link from 'next/link'
import { getPosts } from '@/lib/posts'
import Posts from '@/components/posts'

export default async function RecentPosts() {
	const posts = await getPosts(2)

	return (
		<section className="pb-24">
			<div>
				<h2 className="title mb-12">Recent posts</h2>
				<Posts posts={posts} />

				<Link
					href="/posts"
					className="link btn btn-ghost mt-8 inline-flex gap-2 underline-offset-2"
				>
					All posts
				</Link>
			</div>
		</section>
	)
}
