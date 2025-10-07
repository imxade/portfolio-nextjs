import { routes, siteName } from '@/config'
import ThemeToggle from '@/components/themeToggle'
import Link from 'next/link'

export default function FloatingNavbar() {
	return (
		<div className="fixed bottom-2 z-50 w-8/9 justify-self-center rounded-xl backdrop-blur-xl md:w-4/5">
			<div className="navbar shadow-lg">
				{/* Left: siteName */}
				<Link href={'/'} className="flex-1 px-2 text-xl font-bold">
					{siteName}
				</Link>

				{/* Center (hidden on mobile) */}
				<div className="hidden md:flex">
					<ul className="menu menu-horizontal px-4 text-xl">
						{routes.map(route => (
							<li key={route.link}>
								<a href={route.link}>{route.name}</a>
							</li>
						))}
					</ul>
				</div>

				{/* Right: Theme toggle + Mobile menu */}
				<div className="flex-none gap-2">
					<ThemeToggle />

					{/* Mobile dropdown */}
					<div className="dropdown dropdown-top dropdown-end px-2 md:hidden">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-12 w-12"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</label>
						<ul
							tabIndex={0}
							className="menu menu-xl dropdown-content bg-base-200 rounded-box mt-3 w-40 shadow-lg"
						>
							{routes.map(route => (
								<li key={route.link}>
									<a href={route.link}>{route.name}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
