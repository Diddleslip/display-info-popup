import React, { useState } from 'react';
import {
  Checkbox,
  Sidebar,
} from 'semantic-ui-react'
import { PopUpData } from "./PopUpData";

import "./PopUpBar.css"
import 'semantic-ui-css/semantic.min.css'

function PopUpBar() {
  // This is the state for the Sidebar Component
  const [visible, setVisible] = useState(false);
  // This is the state for the Dummy Data
  const [data, setData] = useState([]);


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
                    <li id="liID1" onClick={() => console.log("CLICK")}>Gallery</li>
                    <li id="liID2">Photos</li>
                    <li id="liID3">Videos</li>
                  </div>
                  <div>
                    
                  </div>
                </div>
              </div>
          ))
        ))}
      </Sidebar>

      {/* <Ref innerRef={segmentRef}>
        <button className="buttonClass">Close sidebar</button>
      </Ref> */}
    </div>
  )
}

export default PopUpBar