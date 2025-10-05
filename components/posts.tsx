import PostCard from './postCard'
import { PostMetadata } from '@/lib/posts'

export default function Posts({ posts }: { posts: PostMetadata[] }) {
	return (
		<ul className="flex flex-col gap-8">
			{posts.map(post => (
				<li key={post.slug}>
					<PostCard {...post} />
				</li>
			))}
		</ul>
	)
}
