import Link from 'next/link';

export default function Header() {
	return (
		<header className='text-white body-font'>
			<div
				className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'
				bis_skin_checked='1'
			>
				<Link
					href='/'
					className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
				>
					<svg
						fill='#000000'
						width='800px'
						height='800px'
						viewBox='0 0 16 16'
						xmlns='http://www.w3.org/2000/svg'
						className='w-10 h-10 text-white p-2 bg-blue-500 rounded-full'
					>
						<path
							d='M16 15a1 1 0 0 1-2 0V8A6 6 0 1 0 2 8v7a1 1 0 0 1-2 0V8a8 8 0 1 1 16 0v7zm-4-3a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm-4 0a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 1-1zm2-6a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
							fill-rule='evenodd'
						/>
					</svg>
					<span className='ml-3 text-xl text-white'>Blog App</span>
				</Link>
				<nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
					<Link
						href='/'
						className='mr-5 hover:text-gray-400 cursor-pointer'
					>
						Home
					</Link>
					<Link
						href='/blog'
						className='mr-5 hover:text-gray-400 cursor-pointer'
					>
						Blog
					</Link>
					<Link
						href='/about'
						className='mr-5 hover:text-gray-400 cursor-pointer'
					>
						About
					</Link>
				</nav>
			</div>
		</header>
	);
}
