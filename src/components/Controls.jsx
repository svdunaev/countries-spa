import { Search } from './Search';
import { useState, useEffect } from 'react';

export const Controls = () => {
	const [search, setSearch] = useState('');


	return (
		<div>
			<Search search={search} setSearch={setSearch} />
		</div>
	)
}