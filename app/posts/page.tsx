import { getPosts } from '@/lib/posts'
import PostsWithSearch from '@/components/posts-with-search'

export default async function PostsPage() {
	const posts = await getPosts()

	return (
		<PostsWithSearch posts={posts} />
	)
}
