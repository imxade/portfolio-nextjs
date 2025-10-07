import FeaturedProjects from '@/components/featuredProjects'
import Hero from '@/components/hero'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
	return (
		<>
			<Hero />
			<RecentPosts />
			<FeaturedProjects />
		</>
	)
}
