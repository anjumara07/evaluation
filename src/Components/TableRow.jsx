import axios from 'axios';
export const TableRow =({rowdata})=>{
    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8080/data${id}`).then((res)=>{        
        });
    }
    
    return (
        <>
            <tr>
                <td>{rowdata.id}</td>
                <td>{rowdata.country}</td>
                <td>{rowdata.city}</td>
                <td>{rowdata.population}</td>
                <td><button>Edit</button></td>
                <td><button onclick={()=>{handleDelete(rowdata.id)}} >Delete</button></td>
            </tr>
        
        </>
    )
}