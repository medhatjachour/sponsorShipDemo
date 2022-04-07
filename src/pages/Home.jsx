import React, { useState } from "react";
import Table from "../components/table";
import { Users } from "../dummydata";
import Filter from "../components/Filter";
import "./home.css";

const Home = () => {
  const [query, setQuery] = useState(Users);


  const handleFilterName = (name) => {
    if (!name) { 
      return setQuery(Users)
    }
    else{
      
    const filteredData = query.filter((item) => {
      if (item.Name.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
    setQuery(filteredData);
  } 
  };

  const generatePersonality_TypeDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Personality_Type))];
  };

  const handleFilterPersonality = (personality) => {
    if (personality === "Any"){
    setQuery(Users);
    }
    else{
      
    setQuery(Users);
    const filteredData = query.filter((item) => {
      if (item.Personality_Type === personality) {
        return item  ;
      }
    });
    setQuery(filteredData);
  }
  };

  const generateEthnicityDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Ethnicity))];
  };

  const handleFilterEthnicity= (ethnicity) => {
    if (ethnicity === "Any"){
      setQuery(Users)
    }
    else{
    const filteredData = query.filter((item) => {
      if (item.Ethnicity === ethnicity ){
        return item  ;
      }
    });
   
    setQuery(filteredData);
  }
  };

  const generatePlayer_positionDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.League_Position))];
  };
  
  const handleFilterPosition = (position) => {
    if (position === "Any"){
      setQuery(Users)
    }
    else{
    const filteredData = query.filter((item) => {
      if (item.League_Position === position ){
        return item  ;
      }
    });
   
    setQuery(filteredData);
  }
  };

  const generatePlayer_leagueDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.League))];
  };
  
  const handleFilterLeague = (league) => {
    if (league === "Any"){
      setQuery(Users)
    }
    else{
    const filteredData = query.filter((item) => {
      if (item.League === league ){
        return item  ;
      }
    });
   
    setQuery(filteredData);
  }
  };
  
  const generatePlayer_awardsDataForDropdown = () => {
    return [...new Set(Users.map((item) => item.Individual_Awards).sort( (function(a, b) {
      return a - b;
    }) ))];
  };
  const handleFilterawards = (awards) => {
    
    if (awards === "Any"){
      setQuery(Users)
    }
    else{
    const filteredData = query.filter((item) => {
      const stAward = `${item.Individual_Awards }`

      if (stAward.toString() === awards ){
        return item  ;
      }
    });
    setQuery(filteredData);
    }
  };

  const handleFilterSocial = (follower) => {
    
    if (follower === "Any"){
      //setQuery(Users)
    }
    else if (follower === "100000"){
      const filteredData = query.filter((item) => {
        const stdt = `${item.Total_Followers }`
        const stSlct = follower
  
        if (parseInt(stdt) <= stSlct ){
          return item  ;
        }
      });
      setQuery(filteredData);
    }
    
    else if (follower === "250000"){
      const filteredData = query.filter((item) => {
        const stdt = `${item.Total_Followers }`
        const stSlct = follower
  
        if (parseInt(stdt) <= stSlct && parseInt(stdt) >= 100000 ){
          return item  ;
        }
      });
      setQuery(filteredData);
    }
    
    else if (follower === "500000"){
      const filteredData = query.filter((item) => {
        const stdt = `${item.Total_Followers }`
        const stSlct = follower
  
        if (parseInt(stdt) <= stSlct && parseInt(stdt) >= 250000 ){
          return item  ;
        }
      });
      setQuery(filteredData);
    }
    
    else if (follower === "1000000"){
      const filteredData = query.filter((item) => {
        const stdt = `${item.Total_Followers }`
        const stSlct = follower
  
        if (parseInt(stdt) <= stSlct && parseInt(stdt) >= 500000 ){
          return item  ;
        }
      });
      setQuery(filteredData);
    }
    
    else if (follower === "1000001"){
      const filteredData = query.filter((item) => {
        const stdt = `${item.Total_Followers }`
        const stSlct = follower
  
        if (parseInt(stdt) >= stSlct ){
          return item  ;
        }
      });
      setQuery(filteredData);
    }
  };
  const handleReset = () => {
    setQuery(Users)
  }
  return (
    <>
    <div className="container-fluid">
      <div className="vcont">
        <div className="row wdss">
          <div className="col-md-3">
            <Filter
              onNameFilter = {handleFilterName}
              personality_type = {generatePersonality_TypeDataForDropdown()}
              onPersonalityFilter = {handleFilterPersonality}
              ethnicity_type = {generateEthnicityDataForDropdown() }
              onEthinictyFilter = {handleFilterEthnicity}
              player_position = {generatePlayer_positionDataForDropdown()}
              onPositionFilter = {handleFilterPosition}
              player_league = {generatePlayer_leagueDataForDropdown()}
              onLeagueFilter = {handleFilterLeague}
              player_awards={generatePlayer_awardsDataForDropdown()}
              onAwardsFilter = {handleFilterawards}
              onSocialFilter = {handleFilterSocial}
              onReset = {handleReset}
        />
          </div>
          <div className="col-md-9">
            <Table data={query} />
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default Home;

