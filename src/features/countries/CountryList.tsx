import { Card } from "components/Card"
import { List } from "components/List"
import { useNavigate } from "react-router-dom"

import { CountrieInfo, Country } from "types"
import { useCountries } from "./useCountries"

const CountryList = () => {
	const navigate = useNavigate()

	const [countries, { error, status }] = useCountries()

	return (
		<>
			{error && <h2>Can't fetch data</h2>}
			{status === "loading" && <h2>Loading...</h2>}

			{status === "received" && (
				<List>
					{countries.map((c: Country) => {
						const countryInfo: CountrieInfo = {
							img: c.flags.png,
							name: c.name,
							info: [
								{
									title: "Population",
									description: c.population.toLocaleString(),
								},
								{
									title: "Region",
									description: c.region,
								},
								{
									title: "Capital",
									description: c.capital,
								},
							],
						}

						return (
							<Card
								key={c.name}
								onClick={() => navigate(`/country/${c.name}`)}
								{...countryInfo}
							/>
						)
					})}
				</List>
			)}
		</>
	)
}

export { CountryList }
