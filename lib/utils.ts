export function formatDate(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	})
}

export function calculateReadTime(text: string): number {
	const wordsPerMinute = 200
	const words = text.trim().split(/\s+/).length
	return Math.ceil(words / wordsPerMinute)
}
