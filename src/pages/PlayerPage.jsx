import "./playerPage.css";
import { Users } from "../dummydata";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import img from "../assets/u90.png";

import { Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
//import { BsFillShareFill } from "react-icons/bs";
//import { BsFillSave2Fill } from "react-icons/bs";

import Image from "react-bootstrap/Image";
import { ProgressBar } from "react-bootstrap";
const Playerpage = () => {
  const { id } = useParams();

  const [player, setPlayer] = useState([]);
  const [player_img, setPlayer_img] = useState(
    require(`../assets/web/user.png`)
  );
  
  const [sponsor_img, setSponsor_img] = useState(
    require(`../assets/web/user.png`)
  );
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getPlayer = () => {
      //setLoading(true);
      //const response = await fetch(`http://localhost:3000/fakeProdycts.json/Players/${id}`)

      //src=require(`../assets/web/${player.id}.png`)
      setPlayer(Users[id]);

      setLoading(false);
    };
    getPlayer();
  });

  useEffect(() => {
    const getPlayer_img = () => {
      //setPlayer_img(require(`../assets/web/${player.id}.png`));

      if (loading) {
        setPlayer_img(require(`../assets/web/user.png`));
        setSponsor_img(require(`../assets/web/user.png`));
      } else {
        console.log(typeof( player.Overall_rating));
        console.log( player.Overall_rating);
        
        setPlayer_img(require(`../assets/web/${player.id}.png`));
        setSponsor_img(require(`../assets/sponsers/${player.Sponsor}.png`));
      }
    };
    getPlayer_img();
  });

  return (
    <>
      <div className="plr_cont container">
        <div className="raw">
          <div className="plr_col row">
            <div className="col-md-3">
              <div className="player_img">
                <Image
                  src={player_img}
                  height="480px"
                  width="400px"
                  alt={player.id}
                />
              </div>
            </div>
            <div className="col-md-6 player_name">
              <h2>{player.Name}</h2>
            </div>
            <div className="col-md-3 img-bigCnt">
              <div className="ic-img">
                <img src={img} alt="" />
                <div>
                  <p>PSV</p>
                  <span>
                  
                    <span>€</span> {Math.abs(parseInt(player.Predicted_Sponsorship_value)) > 999 ? Math.sign(parseInt(player.Predicted_Sponsorship_value))*((Math.abs(parseInt(player.Predicted_Sponsorship_value))/1000).toFixed(1)) + 'k' : Math.sign(parseInt(player.Predicted_Sponsorship_value))*Math.abs(parseInt(player.Predicted_Sponsorship_value))}
                  </span>
                </div>
              </div>
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="nav-dropdown-dark-example">
                  <BsThreeDots />
                </Dropdown.Toggle>
                  {/*
                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <BsFillSave2Fill /> Save Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <BsFillShareFill /> Share
                  </Dropdown.Item>
                </Dropdown.Menu>
                */}
              </Dropdown>
            </div>
          </div>

          <div className="plr_col row common">
            <div className="col-md-3 ccmon">
              <h5>
                Personality <BsExclamationCircle />{" "}
              </h5>
              <p>{player.Personality_Type}</p>
            </div>
            <div className="col-md-3 ccmon">
              <h5>
                Ethnicity <BsExclamationCircle />{" "}
              </h5>

              <p>{player.Ethnicity} </p>
            </div>
            <div className="col-md-3 ccmon">
              <h5>
                Position <BsExclamationCircle />{" "}
              </h5>

              <p>{player.League_Position} </p>
            </div>
            <div className="col-md-3 ccmon cmonl">
              <h5>
                Current Sponsor <BsExclamationCircle />{" "}
              </h5>
              <img src={sponsor_img} alt={player.Sponsor}></img>

            </div>
          </div>

          <div className="plr_col row common">
            <div className="col-md-3 ccmon">
              <h5>
                {" "}
                Predicted sponsorship <BsExclamationCircle />{" "}
              </h5>

              <p>€{player.Predicted_Sponsorship_value} </p>
            </div>
            <div className="col-md-3 ccmon">
              <h5>
                Total followers <BsExclamationCircle />{" "}
              </h5>

              <p>{parseInt(player.Total_Followers).toLocaleString("en-US")} </p>
            </div>
            <div className="col-md-3 ccmon">
              <h5>
                Personal Awards <BsExclamationCircle />{" "}
              </h5>

              <p>{player.Individual_Awards} </p>
            </div>
            <div className="col-md-3 ccmon cmonl">
              <h5>
                Ad value equivalent <BsExclamationCircle />{" "}
              </h5>{" "}
              <p>€{Math.abs(parseInt(player.Ad_value_equivalent)) > 999 ? Math.sign(parseInt(player.Ad_value_equivalent))*((Math.abs(parseInt(player.Ad_value_equivalent))/1000).toFixed(1)) + 'k' : Math.sign(parseInt(player.Ad_value_equivalent))*Math.abs(parseInt(player.Ad_value_equivalent))}</p>
            </div>
          </div>

          <div className="plr_col common col-rating">
            <div className="h_holder">
            <h5>Overall Rating<span>  {player.Overall_rating}  </span>  </h5>
             {/*  <p> * Industry range is between 38 : 68</p>*/}
              </div>
            <div className="prgbar">
              <ProgressBar>
              
                <ProgressBar  variant="danger" now={player.Overall_rating>=38.33?38.33:player.Overall_rating} key={3} label= {player.Overall_rating>=38.33?38:player.Overall_rating} />
                <ProgressBar  variant="warning" now={player.Overall_rating >= 68.33?68.33 - 38.33: player.Overall_rating <= 38.33 ? 0: 68.33 - player.Overall_rating} key={2} label= {player.Overall_rating >= 68.33?/*"38  - - Industry range - -  68"*/68: player.Overall_rating <= 38.33 ? 0:  player.Overall_rating } />
                <ProgressBar  variant="success" now={player.Overall_rating>=68.33?player.Overall_rating-68.33:0 } label= {player.Overall_rating>=0?player.Overall_rating:''}  key={1} />

              </ProgressBar>
            </div>
          </div>
          <div>
            <button>
              Back
            </button>
            
            <button>
              New Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playerpage;
