import { Rating, RatingStar } from 'flowbite-react';

const Component = ({ score, scoredBy }) => {
	return (
		<Rating size={6}>
			<RatingStar />
			<p className='ml-0.5 text-xs font-bold text-gray-900 dark:text-white'>
				{score}
			</p>
			<span className='mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400' />
			<p className='text-xs font-medium text-gray-900 underline hover:no-underline dark:text-white'>
				{scoredBy.toLocaleString()} reviews
			</p>
		</Rating>
	);
};

export default Component;
