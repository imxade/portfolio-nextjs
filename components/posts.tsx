import PostCard from './postCard'
import { PostMetadata } from '@/lib/posts'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
	return (
		<ul>
			{posts.map(post => (
				<li key={post.slug} className="mb-8">
					<PostCard {...post} />
				</li>
			))}
		</ul>
	)
}
