const TextDetailAnime = ({ title, detail }) => {
	return (
		<div className='px-4 py-5 flex flex-col gap-4'>
			<h3 className='font-semibold text-2xl'>{title}</h3>
			<hr className='border border-slate-900 dark:border-slate-700 mb-2' />
			<p className='text-base md:text-lg text-justify leading-relaxed'>
				{detail}
			</p>
		</div>
	);
};

export default TextDetailAnime;
