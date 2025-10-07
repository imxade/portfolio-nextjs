import Image from 'next/image'
import MDXContent from '@/components/mdx-content'
import { getPosts, getPostBySlug } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
	const posts = await getPosts()
	return posts.map(post => ({ slug: post.slug }))
}

export default async function Post(props: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await props.params
	const post = await getPostBySlug(slug)

	if (!post) notFound()

	const { metadata, content } = post
	const { title, image, date, readtime } = metadata

	return (
		<div className="mx-auto w-7/8 p-4">
			{image && (
				<div className="h-max-80 relative mb-6 justify-self-center overflow-hidden rounded-lg">
					<Image
						src={image}
						alt={title || ''}
						width={600}
						height={0}
						priority
					/>
				</div>
			)}

			<header className="mb-4">
				<h1 className="mb-3 text-4xl leading-tight font-bold tracking-tight">
					{title}
				</h1>
				<p className="text-muted-foreground text-sm text-gray-400">
					{formatDate(date ?? '')} • {readtime} min read
				</p>
			</header>

			<hr />

			<main className="prose dark:prose-invert mt-10 max-w-none">
				<MDXContent source={content} />
			</main>
		</div>
	)
}
