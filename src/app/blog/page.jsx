import Card from '../components/ui/card';

async function fetchPosts() {
	const res = await fetch(`http://localhost:3000/data.json`);
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
