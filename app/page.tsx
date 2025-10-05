import FeaturedProjects from '@/components/featuredProjects'
import Hero from '@/components/hero'
import RecentPosts from '@/components/recent-posts'

export default function Home() {
	return (
		<section className="pt-24 pb-24">
			<div className="mx-auto px-4 md:px-6">
				<Hero />
				<RecentPosts />
				<FeaturedProjects />
			</div>
		</section>
	)
}
