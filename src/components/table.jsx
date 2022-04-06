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
                    <th>Current_club</th>
                    <th>Total_Followers</th>
                    <th>Overall_rating</th>
                    <th>Predicted_Sponsorship_value</th>
                </tr>
                
                {data.map(item => (
                <tr key={item.id}>
                    
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{item.Name}  </NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}> {item.Current_club}</NavLink></td>
                    <td><NavLink to={`/Playerpage/${item.id-1}`}>{item.Total_Followers}</NavLink></td>
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
