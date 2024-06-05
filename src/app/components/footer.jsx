export default function Footer() {
	return (
		<footer className='text-gray-600 body-font'>
			<div
				className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'
				bis_skin_checked='1'
			>
				<a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
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
				</a>
				<p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>© 2024 Blog App </p>
			</div>
		</footer>
	);
}
