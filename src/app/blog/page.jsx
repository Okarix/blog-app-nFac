import Card from '../components/ui/card';

async function fetchPosts() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}
	return res.json();
}

export default async function Blog() {
	const posts = await fetchPosts();

	return (
		<main className='flex flex-wrap'>
			{posts.map(post => {
				return (
					<Card
						key={post.id}
						author={post.author}
						date={post.date}
						description={post.description}
						title={post.title}
						id={post.id}
					/>
				);
			})}
		</main>
	);
}
