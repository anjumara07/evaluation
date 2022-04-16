import {useState,useEffect} from 'react';
import axios from 'axios';


export const Table =()=>{
    const [row,setRow] = useState([]);

    useEffect(()=>{
        getResponse()
    },[])

    const getResponse = ()=>{
        axios.get('http://localhost:8080/city').then((res)=>{
           setRow([...res.data]);
        })
    }

    const sorting = (e)=>{
        if(e ==='asc'){
            let ans = row.sort((a,b)=>a.population-b.population)
            setRow([...ans])
        }
        else{
            let ans = row.sort((a,b)=>b.population-a.population)
            setRow([...ans])
        }
    }

    const filter = (e) =>{
        let ans = row.filter((el)=>{
             return el.country === e.target.value ;
        })
        console.log(ans)
        // setRow([...ans])
    }

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8080/city/${id}`)
        getResponse();
    }

    return (
        <>
          <input type="text" onChange={filter} />
          <button onClick={() =>{filter()}} >Filter by Country</button>
          <button onClick={() =>{sorting('asc')}}>Sort Asc</button>
          <button onClick={() =>{sorting('desc')}}>Sort Desc</button>
          <table style={{border : '1px solid black' , margin : '50px'}}>
              <thead>
                  <tr>
                      <th>id</th>
                      <th>Country</th>
                      <th>City</th>
                      <th>Population</th>
                      <th>Edit</th>
                      <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      row.map((rowdata)=>{
                         return <tr key={rowdata.id}>
                                    <td>{rowdata.id}</td>
                                    <td>{rowdata.country}</td>
                                    <td>{rowdata.city}</td>
                                    <td>{rowdata.population}</td>
                                    <td><button>Edit</button></td>
                                    <td><button onClick={()=>{handleDelete(rowdata.id)}}>Delete</button></td>
                                </tr>
                      })
                  }
              </tbody>
          </table>
        
        </>
    )
}