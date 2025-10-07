'use client'

import { useState } from 'react'
import { ProjectType } from '@/config'
import Image from 'next/image'

type ProjectCardProps = {
	project: ProjectType
}

export default function ProjectCard({ project }: ProjectCardProps) {
	const [hover, setHover] = useState(false)

	return (
		<div
			className={`card border-2 shadow-md ${
				hover ? 'border-primary shadow-lg' : 'border-transparent'
			}`}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			<figure>
				<Image
					src={project.image}
					alt={project.title}
					className="rounded-xl p-1"
					width={10000}
					height={0}
				/>
			</figure>

			<div className="card-body">
				<h2
					className={`card-title ${
						hover ? 'underline underline-offset-4' : ''
					}`}
				>
					{project.title}
				</h2>

				{/* Tech stack badges */}
				<div className="flex flex-wrap gap-2">
					{project.techstack.map((tech, idx) => (
						<div key={idx} className="badge badge-outline">
							{tech}
						</div>
					))}
				</div>

				<p>{project.description}</p>

				<div className="card-actions justify-between">
					{project.href && (
						<a
							href={project.href}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-ghost"
						>
							Visit
							<svg
								className="w-4"
								viewBox="0 0 24 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14 12C14 14.7614 11.7614 17 9 17H7C4.23858 17 2 14.7614 2 12C2 9.23858 4.23858 7 7 7H7.5M10 12C10 9.23858 12.2386 7 15 7H17C19.7614 7 22 9.23858 22 12C22 14.7614 19.7614 17 17 17H16.5"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</a>
					)}
					{project.source && (
						<a
							href={project.source}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-ghost"
						>
							Source
							<svg
								className="w-4"
								viewBox="0 0 24 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6 5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5C8 5.55228 7.55228 6 7 6C6.44772 6 6 5.55228 6 5ZM8 7.82929C9.16519 7.41746 10 6.30622 10 5C10 3.34315 8.65685 2 7 2C5.34315 2 4 3.34315 4 5C4 6.30622 4.83481 7.41746 6 7.82929V16.1707C4.83481 16.5825 4 17.6938 4 19C4 20.6569 5.34315 22 7 22C8.65685 22 10 20.6569 10 19C10 17.7334 9.21506 16.6501 8.10508 16.2101C8.45179 14.9365 9.61653 14 11 14H13C16.3137 14 19 11.3137 19 8V7.82929C20.1652 7.41746 21 6.30622 21 5C21 3.34315 19.6569 2 18 2C16.3431 2 15 3.34315 15 5C15 6.30622 15.8348 7.41746 17 7.82929V8C17 10.2091 15.2091 12 13 12H11C9.87439 12 8.83566 12.3719 8 12.9996V7.82929ZM18 6C18.5523 6 19 5.55228 19 5C19 4.44772 18.5523 4 18 4C17.4477 4 17 4.44772 17 5C17 5.55228 17.4477 6 18 6ZM6 19C6 18.4477 6.44772 18 7 18C7.55228 18 8 18.4477 8 19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19Z"
									fill="currentColor"
								/>
							</svg>
						</a>
					)}
				</div>
			</div>
		</div>
	)
}
