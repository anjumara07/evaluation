import React,{useState} from 'react';
import {Link} from 'react-router-dom'

export const Nav = () =>{
    return (
        <div style={{display: 'flex' , border: '2px solid' , marginBottom: '20px'}}>
          <p style={{border: '2px solid' , color:'black' , textDecoration: 'none',padding: '10px 20px',borderRadius:'5px', margin: '10px 30px' , fontWeight:'bold'}}><Link to='/'>Table</Link></p>
          <p style={{border: '2px solid' , color:'black' , textDecoration: 'none',padding: '10px 20px',borderRadius:'5px', margin: '10px 30px', fontWeight:'bold'}}><Link to='/add-country'>AddCountry</Link></p>
          <p style={{border: '2px solid' , color:'black' , textDecoration: 'none',padding: '10px 20px',borderRadius:'5px', margin: '10px 30px', fontWeight:'bold'}}><Link to='add-city'>AddCity</Link></p>
        </div>
    )
}