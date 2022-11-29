import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { searchByCountry } from '../config';

import { Button } from '../components/Button';
import { Info } from '../components/Info';

export const Details = () => {
	const {state} = useLocation();
	const navigate = useNavigate();

	const [country, setCountry] = useState(null);
	
	useEffect(() => {
		axios.get(searchByCountry(state)).then(
			({data}) => setCountry(data[0])
		)
	}, [state])

	return <div>
			<Button onClick={() => {navigate(-1)}}>
				<IoArrowBack /> back
			</Button>

			{country && (
				<Info {...country}/>
			)}
		</div>
}