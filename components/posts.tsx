import type { PostMetadata } from "@/lib/posts"
import PostCard from "./postCard"

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.slug} className="mb-8">
          <PostCard {...post} />
        </li>
      ))}
    </ul>
  )
}
