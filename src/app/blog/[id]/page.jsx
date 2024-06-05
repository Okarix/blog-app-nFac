import { notFound } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';

async function fetchPost(id) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/data.json`);
	if (!res.ok) {
		throw new Error('Failed to fetch posts');
	}
	const posts = await res.json();
	return posts.find(post => post.id === parseInt(id));
}

export default async function Post({ params }) {
	const { id } = params;
	const post = await fetchPost(id);

	if (!post) {
		notFound();
		return null;
	}

	return (
		<>
			<section class='text-gray-400  body-font'>
				<Link
					href='/blog'
					className='text-white hover:text-gray-500'
				>
					Back to all
				</Link>
				<div
					class='container mx-auto flex px-5 py-24 items-center justify-center flex-col'
					bis_skin_checked='1'
				>
					<div
						class='text-center lg:w-2/3 w-full'
						bis_skin_checked='1'
					>
						<h1 class='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>{post.title}</h1>
						<p class='leading-relaxed mb-8'>{post.description}</p>
						<p class='title-font sm:text-2xl text-3xl mb-4 font-medium text-slate-500'>date: {post.date}</p>
						<p class='title-font sm:text-2xl text-3xl mb-4 font-medium text-slate-500'>author: {post.author}</p>
					</div>
				</div>
			</section>
		</>
	);
}
