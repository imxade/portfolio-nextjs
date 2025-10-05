import { Feed } from 'feed'
import { getPosts } from '@/lib/posts'
import { siteOwner, siteUrl } from '@/config'

export async function getRSS() {
	const feed = new Feed({
		title: `${siteOwner}`,
		description: `Posts by ${siteOwner}`,
		id: `${siteUrl}/posts`,
		link: `${siteUrl}/posts`,
		language: 'en',

		image: `${siteUrl}/profile.png`,
		favicon: `${siteUrl}/favicon.png`,
		copyright: `All rights reserved ${new Date().getFullYear()}, ${siteOwner}`
	})

	const posts = await getPosts()

	for (const page of posts) {
		feed.addItem({
			id: page.slug,
			title: page.title ?? ' ',
			description: page.description,
			link: `${siteUrl}/posts/${page.slug}`,
			author: [
				{
					name: siteOwner
				}
			],
			date: new Date(page.date ?? ' ')
		})
	}

	return feed.rss2()
}
