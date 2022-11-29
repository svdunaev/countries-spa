import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';


export const HomePage = ({countries, setCountries}) => {
	// const [countries, setCountires] = useState([]);

	const navigate = useNavigate();

  useEffect(() => {
    if(!countries.lenght)
    axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
  }, [countries.lenght, setCountries]);

	return (
		<>
		<Controls />
      <List>
        {
          countries.map(c => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };
            return (
              <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`, {state: c})}/>
            )
          })
        }
      </List>
		</>
	)
}