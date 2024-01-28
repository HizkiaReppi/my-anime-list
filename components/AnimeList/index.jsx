import { Card } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import Rating from '@/components/Rating';

const AnimeList = ({ api }) => {
	return (
		<div className='flex flex-wrap justify-center items-center'>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{api.data.map(data => {
					console.log(data);
					return (
						<Card
							key={data.mal_id}
							className='max-w-sm rounded-lg overflow-hidden shadow-lg p-1'
							renderImage={() => (
								<Image
									width={400}
									height={400}
									src={data.images.webp.image_url}
									alt={data.title}
									className='w-full max-h-80 object-cover rounded-t-lg'
								/>
							)}>
							
							<h3 className='text-base md:text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
								<Link
									href={`/anime/${data.mal_id}`}
									className='hover:underline'>
									{data.title}
								</Link>
							</h3>

							{data.score && (
								<div className='flex justify-between items-center'>
									<Rating
										score={data.score}
										scoredBy={data.scored_by}
									/>
								</div>
							)}

							{data.synopsis && (
								<p className='text-sm font-normal text-gray-700 dark:text-gray-400'>
									{`${data.synopsis.toLocaleString().slice(0, 200)}...`}
								</p>
							)}
						</Card>
					);
				})}
			</div>
		</div>
	);
};

export default AnimeList;
