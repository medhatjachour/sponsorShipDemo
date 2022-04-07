import React ,{useState} from 'react';
import './filter.css'

import { Button } from 'react-bootstrap';
import { BsExclamationCircle } from "react-icons/bs";

const Filter = ({
  onNameFilter,
  personality_type ,
  onPersonalityFilter,
  ethnicity_type,
  onEthinictyFilter,
  player_position,
  onPositionFilter,
  player_league,
  onLeagueFilter,
  player_awards,
  onAwardsFilter,
  onSocialFilter,
  onReset

}) => {
    
  const [filters, setFilters] = useState({
    name:"",
    personality: "",
    ethnicity: "",
    position:"",
    league: "",
    awards: "",
    follower: "",
  });
    

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    console.log(filters);
    setFilters({
      ...filters,
      [field]: value,
    });

    console.log(field);
    console.log(value);
    switch (field) {
      case "name":
        console.log("name");
        onNameFilter(value);
        //break;
      case "personality":
        console.log("personality");
        onPersonalityFilter(value);
       // break;
      case "ethnicity":
        console.log("ethnicity");
        onEthinictyFilter(value);
       // break;
      case "position":
        console.log("position");
        onPositionFilter(value);
       // break;
      case "league":
        console.log("league");
        onLeagueFilter(value);
       // break;
      case "awards":
        console.log("awards");
        onAwardsFilter(value);
        //break;
      case "follower":
        console.log("follower");
       onSocialFilter(value);
        // break;
      default:
        console.log("default");
        break;
    }
  };

console.log(filters);
    return (
        <div className='holder_filter'>
    <div className="row ">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      
      <div className="col-sm-12 my-2">
        <label htmlFor="name">Name</label>
        <input
          placeholder='search ...'
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="name">Personality <BsExclamationCircle/> </label>
   
        <select
          className="form-control"
          id="personality_type"
          onChange={handleInput("personality")}
        >
          <option value="Any">Any</option>
          {personality_type.map((personality_type) => (
            <option value={personality_type} key={personality_type}>
              {personality_type}
            </option>
          ))}
        </select>

      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="email">Ethnicity_type <BsExclamationCircle/> </label>
      
        <select
          className="form-control"
          id="ethnicity_type"
          onChange={handleInput("ethnicity")}
        >
          <option value="Any">Any</option>
          {ethnicity_type.map((ethnicity_type) => (
            <option value={ethnicity_type} key={ethnicity_type}>
              {ethnicity_type}
            </option>
          ))}
        </select>

      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Position <BsExclamationCircle/> </label>
        
        <select
          className="form-control"
          id="player_position"
          onChange={handleInput("position")}
        >
          <option value="Any">Any</option>
          {player_position.map((player_position) => (
            <option value={player_position} key={player_position}>
              {player_position}
            </option>
          ))}
        </select>

      </div>


      <div className="col-sm-12 my-2">
        <label htmlFor="gender">League  <BsExclamationCircle/> </label>
        
        <select
          className="form-control"
          id="player_league"
          onChange={handleInput("league")}
        >
          <option value="Any">Any</option>
          {player_league.map((player_league) => (
            <option value={player_league} key={player_league}>
              {player_league}
            </option>
          ))}
        </select>
      </div>
      
      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Personal awards  <BsExclamationCircle/> </label>

        <select
          className="form-control"
          id="awards"
          onChange={handleInput("awards")}
          
        >
          <option value="Any">Any</option>
          {player_awards.map((awards) => (
            <option value={awards} key={awards}>
              {awards}
            </option>
          ))}
        </select>
      </div>

      
      <div className="col-sm-12 my-2">
        <label htmlFor="gender">Social followers  <BsExclamationCircle/> </label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("follower")}
        >
          <option value="Any">Any</option>
          <option value= "100000">Less than 100,000</option>
          <option value="250000">Between 100,000 and 250,000</option>
          <option value="500000">Between 250,000 and 500,000</option>
          <option value="1000000">Between 500,000 and 1,000,000</option>
          <option value="1000001">More than 1,000,000</option>

        </select>
      </div>
      
      <div className="col-sm-12 my-2">
      <Button variant="outline-danger" onClick={onReset}>Reset</Button>
      <Button variant="outline-success">Filter</Button>
      </div>
     
    </div>
        </div>
    );
}

export default Filter;
