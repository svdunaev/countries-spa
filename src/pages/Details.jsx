import { useLocation } from 'react-router-dom'

export const Details = () => {
	const location = useLocation();

	return <div>{location.state.name} </div>
}