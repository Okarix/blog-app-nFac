import Link from 'next/link';

export default function Card({ date, author, title, description, id }) {
	return (
		<div
			className='p-4 lg:w-1/3'
			bis_skin_checked='1'
		>
			<div
				className='h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative'
				bis_skin_checked='1'
			>
				<h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>{date}</h2>
				<h2 className='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>author: {author}</h2>
				<h1 className='title-font sm:text-2xl text-xl font-medium text-white mb-3'>{title}</h1>
				<p className='leading-relaxed mb-3 text-white'>{description}</p>
				<Link
					href={`/blog/${id}`}
					className='text-blue-400 inline-flex items-center cursor-pointer hover:text-blue-200'
				>
					Read
					<svg
						className='w-4 h-4 ml-2'
						viewBox='0 0 24 24'
						stroke='currentColor'
						strokeWidth='2'
						fill='none'
						strokeLinecap='round'
						stroke-linejoin='round'
					>
						<path d='M5 12h14'></path>
						<path d='M12 5l7 7-7 7'></path>
					</svg>
				</Link>
			</div>
		</div>
	);
}
