import {useState,useEffect} from 'react';
import axios from 'axios';


export const Table =()=>{
    const [row,setRow] = useState([]);

    useEffect(()=>{
        getResponse()
    },[])

    const getResponse = ()=>{
        axios.get('https://json-server-065.herokuapp.com/city').then((res)=>{
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
        axios.get(`https://json-server-065.herokuapp.com/${ans}`).then((res)=>{
           setRow([...res.data]);
        })
        // console.log(ans)
        setRow([...ans])
    }

    const handleDelete = (id) =>{
        axios.delete(`https://json-server-065.herokuapp.com/${id}`)
        getResponse();
    }

    return (
        <>
          <div style={{margin: 'auto' , width:'700px' , display: 'flex' ,justifyContent:'space-around' , marginBottom:'30px'}}>
                <div>
                    <input style={{borderRadius:'5px', padding: '10px'}} placeholder="Search here..." type="text" onChange={filter} />
                <button style={{color:'white',borderRadius:'5px', padding: '10px', backgroundColor:'blue'}}onClick={() =>{filter()}} >Filter by Country</button>
                </div>
                <button style={{color:'white',borderRadius:'5px', padding: '10px', backgroundColor:'blue'}} onClick={() =>{sorting('asc')}}>Sort Asc</button>
                <button style={{color:'white',borderRadius:'5px', padding: '10px', backgroundColor:'blue'}} onClick={() =>{sorting('desc')}}>Sort Desc</button>
          </div>
          <table style={{border : '1px solid black' , margin : 'auto'}}>
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