import PostsWithSearch from "@/components/posts-with-search"
import { getPosts } from "@/lib/posts"

export default async function PostsPage() {
  const posts = await getPosts()

  return <PostsWithSearch posts={posts} />
}
