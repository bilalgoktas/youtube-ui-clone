import React from 'react';
import styles from "./countries.module.css";

const Countries = ({setDrawerOpen, setCountriesOpen, setCountryCode}) => {
    
    const countries = [
        {name: "Netherlands", code: "NL"},
        {name: "Turkey", code: "TR"},
        {name: "United States", code: "US"},
        {name: "United Kingdom", code: "UK"},
    ]

  return (
    <div className={styles.container}>
        <button onClick={()=>{setDrawerOpen(true); setCountriesOpen(false)}} >Back</button>
        {countries.map(country => <button onClick={() => {setCountryCode(country.code); setDrawerOpen(false); setCountriesOpen(false)}} >{country.name}</button>)}
    </div>
  )
}

export default Countries