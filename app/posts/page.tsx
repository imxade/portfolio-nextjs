import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
	const posts = await getPosts()

	return (
		<section className="mx-auto px-4 md:px-6">
			<PostsWithSearch posts={posts} />
		</section>
	)
}
