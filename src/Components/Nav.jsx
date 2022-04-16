import React,{useState} from 'react';
import {Link} from 'react-router-dom'

export const Nav = () =>{
    return (
        <div style={{display: 'flex' , border: '2px solid' , justifyContent:'space-around' , marginBottom: '20px'}}>
          <h2><Link to='/'>Table</Link></h2>
          <h2><Link to='/add-country'>AddCountry</Link></h2>
          <h2><Link to='add-city'>AddCity</Link></h2>
        </div>
    )
}