import React, {useState,useEffect} from 'react';
import axios from "axios";


export const AddCity = () => {
    const [city, setCity] = useState();
    const [population, setPopulation] = useState();
    const [country, setCountry] = useState();
    const [countryData, setCountryData] = useState([]);

    const data = {
        city: city,
        population: population,
        country: country,

    }

    const handleSubmit = () => {
        axios.post("http://localhost:8080/city", data).then((res) => {
            setCity(res.data)
        })
    }

    let getData = () =>{
        axios.get("http://localhost:8080/country").then((res)=>{
        //    console.log(res.data)
           setCountryData(res.data)
        })
    }

    useEffect(() =>{
        getData()
    },[])

    return (
        <div>
            <input type="text" placeholder="name" onChange={(e) => {setCity(e.target.value)}}/>
            <input type="text" placeholder="population" onChange={(e) => {setPopulation(e.target.value)}}/>
            <select onChange={(e) => {setCountry(e.target.value)}}>
                {
                  countryData.map((e)=>{
                    return <option key={e.id}>{e.country}</option>
                  })
                }
            </select>
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}