import React from 'react';
import { NavLink } from 'react-router-dom';
import './table.css'
const Table = ({data}) => {
    return (
        <>

        <table className='basicSearch'>
            <tbody>
                <tr className='theader' >
                    <th >Name</th>
                    <th>Current club</th>
                    <th>Total followers</th>
                    <th>Overall rating</th>
                    <th>Predicted sponsorship value</th>
                </tr>
                
                {data.map(item => (
                <tr key={item.id}>
                    
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{item.Name}  </NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}> {item.Current_club}</NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{parseInt(item.Total_Followers).toLocaleString("en-US")}</NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{item.Overall_rating} </NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{item.Predicted_Sponsorship_value}</NavLink> </td>
                
                    </tr>
                ))}
  
            </tbody>
        </table>

        </>
    );
}

export default Table;
