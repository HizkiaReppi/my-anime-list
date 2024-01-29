const DetailAnime = ({ details }) => {
	return (
		<div className='w-full md:w-2/3 lg:w-4/5 bg-white dark:bg-slate-900 overflow-hidden rounded'>
			<table className='w-full divide-y divide-slate-300 text-sm'>
				<tbody className='divide-y divide-slate-300'>
					{details.map((detail, index) => (
						<tr
							key={index}
							className='transition-all duration-300'>
							<td className='p-4 border-b border-r border-slate-300 font-bold'>
								{detail.label}:
							</td>
							<td className='p-4 border-b border-slate-300'>
								{detail.value !== null ? detail.value : '-'}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default DetailAnime;
