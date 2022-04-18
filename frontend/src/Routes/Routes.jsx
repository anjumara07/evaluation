import {Routes , Route} from 'react-router-dom'
import { Table } from '../Components/Table'
import { AddCountry } from '../Components/AddCountry'
import { AddCity } from '../Components/AddCity'
import {Nav} from '../Components/Nav'

export const AllRoutes = () =>{
    return (
        <>
          <Nav />
          <Routes>
              <Route path="/" element={<Table />} />
              <Route path="/add-country" element={<AddCountry />} />
              <Route path="/add-city" element={<AddCity />} />
          </Routes>        
        </>
    )
}