import React, {useState} from 'react';
import axios from "axios";


export const AddCountry = () => {
    const [addCountry, setAddCountry] = useState();

    const data = {
        country: addCountry,

    }

    const handleSubmit = () => {
        axios.post("https://json-server-065.herokuapp.com/country", data).then((res) => {
            setAddCountry(res.data)
        })
    }

    return (
        <div style={{margin: 'auto' , width:'300px'}}>
            <input style={{borderRadius:'5px', padding: '10px'}} type="text" placeholder="country" onChange={(e) => {setAddCountry(e.target.value)}}/>
            <button style={{color:'white',borderRadius:'5px', padding: '10px', backgroundColor:'blue'}} onClick={handleSubmit}>add country</button>
        </div>
    )
}