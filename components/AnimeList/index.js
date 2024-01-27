import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ api }) => {
	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
			{api.data.map(data => (
				<div
					key={data.mal_id}
					className='border-2 border-black p-1 shadow-xl'>
					<Link href={`/${data.mal_id}`}>
						<Image
							src={data.images.webp.image_url}
							alt={`${data.title} Image`}
							width={350}
							height={350}
							className='border border-black w-full max-h-64 object-cover'
						/>
						<h3 className='font-bold text-sm md:text-base py-4'>
							{data.title}
						</h3>
					</Link>
				</div>
			))}
		</div>
	);
};

export default AnimeList;
