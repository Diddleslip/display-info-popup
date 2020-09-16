import React, { useRef, useState } from 'react'
import {
  Checkbox,
  Grid,
  Header,
  Image,
  Menu,
  Ref,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import "./PopUpBar.css"
import 'semantic-ui-css/semantic.min.css'

function PopUpBar() {
  //This is for Sidebar functionality
  const segmentRef = useRef();
  // This is the state for the Sidebar Component
  const [visible, setVisible] = useState(false);


  return (
    <div>
      <h2>Hello here!</h2>
      <Checkbox
          checked={visible}
          label={{ children: <code>visible</code> }}
          onChange={(e, data) => setVisible(data.checked)}
      />
      <Sidebar
        // as={Menu}
        animation='overlay'
        direction="bottom"
        className="popUpBar"
        // icon='labeled'
        // inverted
        onHide={() => setVisible(false)}
        vertical
        // target={segmentRef}
        visible={visible}
        // width='large'
      >
        <div className="divClass">
          <button 
            className="buttonClass"
            onClick={() => setVisible(!visible)}
          >
            Close sidebar
          </button>
        </div>
        <h1 as='a'>Home</h1>
        <h1 as='a'>Games</h1>
        <h1 as='a'>Channels</h1>
      </Sidebar>

      {/* <Ref innerRef={segmentRef}>
        <button className="buttonClass">Close sidebar</button>
      </Ref> */}
    </div>
  )
}

export default PopUpBar
