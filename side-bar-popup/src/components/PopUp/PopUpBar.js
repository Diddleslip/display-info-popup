import React, { useState } from 'react';
import {
  Checkbox,
  Sidebar,
} from 'semantic-ui-react';
import { PopUpData } from "./PopUpData";
import FinalCarousel from "../FinalCarousel/FinalCarousel";

import "./PopUpBar.css";
import 'semantic-ui-css/semantic.min.css';

function PopUpBar() {
  // This is the state for the Sidebar Component
  const [visible, setVisible] = useState(false);
  // This is the state for the Dummy Data
  const [data, setData] = useState([]);
  const [popUpActive, setPopUpActive] = useState(1);


  return (
    <div>
      <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
          onClick={() => setData([PopUpData.records])}
      />
      <Sidebar
        animation='overlay'
        direction="bottom"
        className="popUpBar"
        onHide={() => setVisible(false)}
        visible={visible}
      >
        <div className="divClass">
          <button 
            id="xButton"
            className="buttonClass"
            onClick={() => {
              setVisible(!visible)
            }}
          >
            X
          </button>
        </div>
        
        {PopUpData && data.map(record => (
          record.map(info => (
              <div key={info.id}  className="bigDiv">
                <div className="recordDiv">
                  <h1 id="recordTitle">{info.name}</h1>
                  <div className="recordDetails">
                    <h3>Type: {info.type.name}</h3>
                    <h3>Coordinates: [ {info.coordinates.longitude}, {info.coordinates.latitude} ]</h3>
                    {info.fields.map((field) => (
                      console.log("THIS IS FIELD!", field),
                      field.name === "Website" ? (
                        <h3>Website: <a href={field.value} target="_blank" rel="noopener noreferrer" >Link</a></h3>
                      ) : null
                    ))}
                  </div>
                </div>
                
                <div className="galleryDiv">
                  <div className="galleryTitles">
                    <li className="liID1">Gallery</li>
                    <li 
                      value={1} 
                      className={`liID2 ${popUpActive === 1 ? "popUpActive" : ""}`} 
                      onClick={(e) => setPopUpActive(e.target.value)}
                    >Photos</li>
                    <li 
                      value={2} 
                      className={`liID3 ${popUpActive === 2 ? "popUpActive" : ""}`} 
                      onClick={(e) => setPopUpActive(e.target.value)}
                    >Videos</li>
                  </div>
                  <FinalCarousel/>
                </div>
              </div>
          ))
        ))}
      </Sidebar>
    </div>
  )
}

export default PopUpBar
