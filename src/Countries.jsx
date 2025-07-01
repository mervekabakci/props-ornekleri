import { countries } from "./data-countries";

export default function Countries() {
    return(
        <>
            <AsianCountries countries={countries} />
            <EuropeanCountries countries={countries} />
            <AfricanCountries countries={countries} />
            <NorthAmericanCountries countries={countries} />
            <SouthAmericanCountries countries={countries} />
        </>
    )
}

function AsianCountries({ countries }){
    return(
        <>
            <h2>Asian Countries</h2>
            {countries.filter(x => x.continent === "Asia").map((country, i) => (
                <div key={i}>
                    <h3>{country.name}</h3>
                    <p>population: {country.population}</p>
                    <p>language: {country.language}</p>
                    <h4>Komşu Ülkeler</h4>
                    <ul>
                        {country.neighbors.map((neighbor, i) => (
                            <li key={i}>{neighbor}</li>
                        ))}
                    </ul>
                    <p>capital: {country.capital}</p>
                    <p>currency: {country.currency}</p>
                </div>
            ))}
        </>
    )
}
function EuropeanCountries({ countries }){
    return(
        <>
            <h2>European Countries</h2>
            {countries.filter(x => x.continent === "Europe").map((country, i) => (
                <div key={i}>
                    <h3>{country.name}</h3>
                    <p>population: {country.population}</p>
                    <p>language: {country.language}</p>
                    <h4>Komşu Ülkeler</h4>
                    <ul>
                        {country.neighbors.map((neighbor, i) => (
                            <li key={i}>{neighbor}</li>
                        ))}
                    </ul>
                    <p>capital: {country.capital}</p>
                    <p>currency: {country.currency}</p>
                </div>
            ))}
        </>
    )
}
function AfricanCountries({ countries }){
    return(
        <>
            <h2>African Countries</h2>
            {countries.filter(x => x.continent === "Africa").map((country, i) => (
                <div key={i}>
                    <h3>{country.name}</h3>
                    <p>population: {country.population}</p>
                    <p>language: {country.language}</p>
                    <h4>Komşu Ülkeler</h4>
                    <ul>
                        {country.neighbors.map((neighbor, i) => (
                            <li key={i}>{neighbor}</li>
                        ))}
                    </ul>
                    <p>capital: {country.capital}</p>
                    <p>currency: {country.currency}</p>
                </div>
            ))}
        </>
    )
}
function NorthAmericanCountries({ countries }){
    return(
        <>
            <h2>NorthAmerican Countries</h2>
            {countries.filter(x => x.continent === "North America").map((country, i) => (
                <div key={i}>
                    <h3>{country.name}</h3>
                    <p>population: {country.population}</p>
                    <p>language: {country.language}</p>
                    <h4>Komşu Ülkeler</h4>
                    <ul>
                        {country.neighbors.map((neighbor, i) => (
                            <li key={i}>{neighbor}</li>
                        ))}
                    </ul>
                    <p>capital: {country.capital}</p>
                    <p>currency: {country.currency}</p>
                </div>
            ))}
        </>
    )
}
function SouthAmericanCountries({ countries }){
    return(
        <>
            <h2>South American Countries</h2>
            {countries.filter(x => x.continent === "South America").map((country, i) => (
                <div key={i}>
                    <h3>{country.name}</h3>
                    <p>population: {country.population}</p>
                    <p>language: {country.language}</p>
                    <h4>Komşu Ülkeler</h4>
                    <ul>
                        {country.neighbors.map((neighbor, i) => (
                            <li key={i}>{neighbor}</li>
                        ))}
                    </ul>
                    <p>capital: {country.capital}</p>
                    <p>currency: {country.currency}</p>
                </div>
            ))}
        </>
    )
}