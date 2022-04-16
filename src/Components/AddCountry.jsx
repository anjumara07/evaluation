import React, {useState} from 'react';
import axios from "axios";


export const AddCountry = () => {
    const [addCountry, setAddCountry] = useState();

    const data = {
        country: addCountry,

    }

    const handleSubmit = () => {
        axios.post("http://localhost:8080/country", data).then((res) => {
            setAddCountry(res.data)
        })
    }

    return (
        <div>
            <input type="text" placeholder="country" onChange={(e) => {setAddCountry(e.target.value)}}/>
            <button onClick={handleSubmit}>add country</button>
        </div>
    )
}