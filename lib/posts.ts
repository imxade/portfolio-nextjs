import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { calculateReadTime } from '@/lib/utils'

const rootDirectory = path.join(process.cwd(), 'content', 'posts')

export type Post = {
	metadata: PostMetadata
	content: string
}

export type PostMetadata = {
	title?: string
	description?: string
	date?: string
	image?: string
	draft?: boolean
	slug: string
	readtime: number
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
	try {
		const filePath = path.join(rootDirectory, slug, 'page.md')
		const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
		const { data, content } = matter(fileContent)
		return {
			metadata: { ...data, slug, readtime: calculateReadTime(fileContent) },
			content
		}
	} catch (error) {
		return null
	}
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
	const dirs = fs
		.readdirSync(rootDirectory, { withFileTypes: true })
		.filter(dirent => dirent.isDirectory()) // only keep folders
		.map(dirent => dirent.name)

	const posts = dirs
		.map(dir => getPostMetadata(dir))
		.filter(post => !post.draft)
		.sort(
			(a, b) =>
				new Date(b.date ?? '').getTime() - new Date(a.date ?? '').getTime()
		)

	return limit ? posts.slice(0, limit) : posts
}

export function getPostMetadata(slug: string): PostMetadata {
	const filePath = path.join(rootDirectory, slug, 'page.md')
	const fileContent = fs.readFileSync(filePath, 'utf8')
	const { data } = matter(fileContent)
	return { ...data, slug, readtime: calculateReadTime(fileContent) }
}
