import { useState } from "react";
import { countries } from "./data-countries";

export default function Countries() {
    return(
        <>
            <AllCountries countries={countries} />
            {/*<AsianCountries countries={countries} />
            <EuropeanCountries countries={countries} />
            <AfricanCountries countries={countries} />
            <NorthAmericanCountries countries={countries} />
            <SouthAmericanCountries countries={countries} /> */}
        </>
    )
}
function AllCountries({ countries }){
    const [selectContinent, setSelectContinent] = useState("All");

    const handleContinentChange = (e) => {
        setSelectContinent(e.target.value);
    }

    const filterContinent = selectContinent === "All" ? countries : countries.filter(country => country.continent === selectContinent);

    return(
        <>  
            <div className="headColumn">

                <h2>Countries</h2>
                <div className="filterColumn">
                    <label htmlFor="selectContinent">Continent Filter</label>
                    <select id="selectContinent" value={selectContinent} onChange={handleContinentChange}>
                        <option value="All">All</option>
                        <option value="Asia">Asia Countries</option>
                        <option value="Europe">Europe Countries</option>
                        <option value="Africa">Africa Countries</option>
                        <option value="North America">North America Countries</option>
                        <option value="South America">South America Countries</option>
                    </select>
                </div>
            </div>
            {filterContinent.map((country, i) => (
                <div className="country" key={i}>
                    <h3>{country.name}</h3>
                    <div><b>population:</b> {country.population}</div>
                    <div><b>language:</b> {country.language}</div>
                    <div><b>neighbors : </b>{country.neighbors.join(', ')}</div>
                    <div><b>capital:</b> {country.capital}</div>
                    <div><b>currency:</b> {country.currency}</div>
                </div>
            ))}
        </>
    )
}
// function AsianCountries({ countries }){
//     return(
//         <>
//             <h2>Asian Countries</h2>
//             {countries.filter(x => x.continent === "Asia").map((country, i) => (
//                 <div key={i}>
//                     <h3>{country.name}</h3>
//                     <p>population: {country.population}</p>
//                     <p>language: {country.language}</p>
//                     <h4>Komşu Ülkeler</h4>
//                     <ul>
//                         {country.neighbors.map((neighbor, i) => (
//                             <li key={i}>{neighbor}</li>
//                         ))}
//                     </ul>
//                     <p>capital: {country.capital}</p>
//                     <p>currency: {country.currency}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// function EuropeanCountries({ countries }){
//     return(
//         <>
//             <h2>European Countries</h2>
//             {countries.filter(x => x.continent === "Europe").map((country, i) => (
//                 <div key={i}>
//                     <h3>{country.name}</h3>
//                     <p>population: {country.population}</p>
//                     <p>language: {country.language}</p>
//                     <h4>Komşu Ülkeler</h4>
//                     <ul>
//                         {country.neighbors.map((neighbor, i) => (
//                             <li key={i}>{neighbor}</li>
//                         ))}
//                     </ul>
//                     <p>capital: {country.capital}</p>
//                     <p>currency: {country.currency}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// function AfricanCountries({ countries }){
//     return(
//         <>
//             <h2>African Countries</h2>
//             {countries.filter(x => x.continent === "Africa").map((country, i) => (
//                 <div key={i}>
//                     <h3>{country.name}</h3>
//                     <p>population: {country.population}</p>
//                     <p>language: {country.language}</p>
//                     <h4>Komşu Ülkeler</h4>
//                     <ul>
//                         {country.neighbors.map((neighbor, i) => (
//                             <li key={i}>{neighbor}</li>
//                         ))}
//                     </ul>
//                     <p>capital: {country.capital}</p>
//                     <p>currency: {country.currency}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// function NorthAmericanCountries({ countries }){
//     return(
//         <>
//             <h2>NorthAmerican Countries</h2>
//             {countries.filter(x => x.continent === "North America").map((country, i) => (
//                 <div key={i}>
//                     <h3>{country.name}</h3>
//                     <p>population: {country.population}</p>
//                     <p>language: {country.language}</p>
//                     <h4>Komşu Ülkeler</h4>
//                     <ul>
//                         {country.neighbors.map((neighbor, i) => (
//                             <li key={i}>{neighbor}</li>
//                         ))}
//                     </ul>
//                     <p>capital: {country.capital}</p>
//                     <p>currency: {country.currency}</p>
//                 </div>
//             ))}
//         </>
//     )
// }
// function SouthAmericanCountries({ countries }){
//     return(
//         <>
//             <h2>South American Countries</h2>
//             {countries.filter(x => x.continent === "South America").map((country, i) => (
//                 <div key={i}>
//                     <h3>{country.name}</h3>
//                     <p>population: {country.population}</p>
//                     <p>language: {country.language}</p>
//                     <h4>Komşu Ülkeler</h4>
//                     <ul>
//                         {country.neighbors.map((neighbor, i) => (
//                             <li key={i}>{neighbor}</li>
//                         ))}
//                     </ul>
//                     <p>capital: {country.capital}</p>
//                     <p>currency: {country.currency}</p>
//                 </div>
//             ))}
//         </>
//     )
// }