import React, { useState } from "react";
import Table from "../components/table";
import { Users } from "../dummydata";
import Filter from "../components/Filter";
import "./home.css";

let theData
const Home = () => {

  const [query, setQuery] = useState(Users);


  const handleFilterName = (name) => {
    if (!name || name === " ") { 
       //return setQuery(Users)
    }
    else{
    const filteredDataName = Users.filter((item) => {
      if (item.Name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setQuery(filteredDataName);
  } 
  };


  const handleFilters = (filters) =>{
    console.log("We doing filters");
    let theData = Users
    for (let index = 0; index < (Object.keys(filters)).length; index++) {
     const field = Object.keys(filters)[index]
     const value = filters[Object.keys(filters)[index]]

     switch (field) {
       case "name":
         //onNameFilter(value);
            if (!value) { 
              //return setQuery(theData)
              console.log('name is nothing');
            }
            else{
              
            const filteredData = theData.filter((item) => {
              if (item.Name.toLowerCase().includes(value.toLowerCase())) {
                return item;
              }
            });
            setQuery(filteredData);
            theData = filteredData
          } 
         break;
       case "personality":
         
          console.log("personality");
          if (value === "Any" || !value){
          setQuery(theData);
          }
          else{
            
          const filteredDataPersonality = theData.filter((item) => {
            if (item.Personality_Type === value) {
              return item;
            }
          });
          setQuery(filteredDataPersonality);
          console.log(filteredDataPersonality)
          theData = filteredDataPersonality
        }
        
         break;

       case "ethnicity":
          console.log("ethnicity");
          if (value === "Any" || !value){
            setQuery(theData)
          }
          else{
          const filteredDataEthnicity = theData.filter((item) => {
            if (item.Ethnicity === value ){
              return item  ;
            }
          });
          setQuery(filteredDataEthnicity);
          console.log(filteredDataEthnicity)
          theData = filteredDataEthnicity
        };
         break;
       case "position":
         
          console.log("position");
          if (value === "Any" || !value){
            setQuery(theData)
          }
          else{
          const filteredDataPosition = theData.filter((item) => {
            if (item.League_Position === value ){
              return item  ;
            }
          });
          setQuery(filteredDataPosition);
          console.log(filteredDataPosition)
          theData = filteredDataPosition
        }

         break;
       case "league":
          console.log("league");
          if (value === "Any" || !value){
           setQuery(theData)
          }
          else{
          const filteredDataLeague = theData.filter((item) => {
            if (item.League === value ){
              return item  ;
            }
          });
         
          setQuery(filteredDataLeague);
          console.log(filteredDataLeague)
          theData = filteredDataLeague
        }
  
         break;
       case "awards":
          console.log("awards");
          
          if (value === "Any" || !value){
           setQuery(theData)
          }
          else{
          const filteredDataAwards = theData.filter((item) => {
            const stAward = `${item.Individual_Awards }`
      
            if (stAward.toString() === value ){
              return item  ;
            }
          });
          theData = filteredDataAwards
          console.log(filteredDataAwards)
          setQuery(filteredDataAwards);
          }
      
         break;
       case "follower":
          
          if (value === "Any" || !value){
            setQuery(theData)
          }
          else if (value === "100000"){
            const filteredDataFollowers = theData.filter((item) => {
              const stdt = `${item.Total_Followers }`
              const stSlct = value
        
              if (parseInt(stdt) <= parseInt(stSlct )) {
                return item  ;
              }
            });
            setQuery(filteredDataFollowers);
            theData = filteredDataFollowers
          }
          
          else if (value === "250000"){
            const filteredDataFollowers = theData.filter((item) => {
              const stdt = `${item.Total_Followers }`
              const stSlct = value
        
              if (parseInt(stdt) <= parseInt(stSlct ) && parseInt(stdt) >= 100000 ){
                return item  ;
              }
            });
            setQuery(filteredDataFollowers);
            theData = filteredDataFollowers
          }
          
          else if (value === "500000"){
            const filteredDataFollowers = theData.filter((item) => {
              const stdt = `${item.Total_Followers }`
              const stSlct = value
        
              if (parseInt(stdt) <= parseInt(stSlct ) && parseInt(stdt) >= 250000 ){
                return item  ;
              }
            });
            setQuery(filteredDataFollowers);
            theData = filteredDataFollowers
          }
          
          else if (value === "1000000"){
            const filteredDataFollowers = theData.filter((item) => {
              const stdt = `${item.Total_Followers }`
              const stSlct = value
        
              if (parseInt(stdt) <= parseInt(stSlct ) && parseInt(stdt) >= 500000 ){
                return item  ;
              }
            });
            setQuery(filteredDataFollowers);
            theData = filteredDataFollowers
          }
          
          else if (value === "1000001"){
            const filteredDataFollowers = theData.filter((item) => {
              const stdt = `${item.Total_Followers }`
              const stSlct = value
        
              if (parseInt(stdt) >= parseInt(stSlct ) ){
                return item  ;
              }
            });
            setQuery(filteredDataFollowers);
            console.log(filteredDataFollowers)
            theData = filteredDataFollowers
          }
        
        break;
       default:
         break;
       }
    }
  }
  const handleReset = () => {
    setQuery(Users)
    theData = Users
  }
  const generatePersonality_TypeDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Personality_Type))];
  };
  const generateEthnicityDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Ethnicity))];
  };
  const generatePlayer_positionDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.League_Position))];
  };
  const generatePlayer_leagueDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.League))];
  };
  const generatePlayer_awardsDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Individual_Awards).sort( (function(a, b) {
      return a - b;
    }) ))];
  };
  return (
    <>
    <div className="container-fluid">
      <div className="vcont">
        <div className="row wdss">
          <div className="col-md-3">
            <Filter

              onNameFilter = {handleFilterName}
              personality_type = {generatePersonality_TypeDataForDropdown()}
              onHandleFilters = {handleFilters}
              ethnicity_type = {generateEthnicityDataForDropdown() }
    
              player_position = {generatePlayer_positionDataForDropdown()}
   
              player_league = {generatePlayer_leagueDataForDropdown()}

              player_awards={generatePlayer_awardsDataForDropdown()}
   
              onReset = {handleReset}
            />
          </div>
          <div className="col-md-9">
           {console.log(query)}
            <Table data={query} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Home;

