import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Controls } from '../components/Controls';
import { ALL_COUNTRIES } from '../config';
import { List } from '../components/List';
import { Card } from '../components/Card';


export const HomePage = ({countries, setCountries}) => {
  const [filtеredCountries, setFilteredCountries] = useState(countries);

	const navigate = useNavigate();

  const handleSearch = useCallback( (search, region) => {
    let data = [...countries];

    if (region) {
      data = data.filter(c => c.region.includes(region))
    }

    if (search) {
      data = data.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))
    }

    setFilteredCountries(data)
  }, [countries]);

  useEffect(() => {
    if (!countries.lenght) axios.get(ALL_COUNTRIES).then(({data}) => setCountries(data))
  }, [countries, setCountries]);

	return (
		<>
		<Controls onSearch={handleSearch}/>
      <List>
        {
          filtеredCountries.map(c => {
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
              <Card key={c.name} {...countryInfo} onClick={() => navigate(`/country/${c.name}`, {state: c.name})}/>
            )
          })
        }
      </List>
		</>
	)
}