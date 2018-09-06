import React from 'react';
import { Grid } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';
import ariana from 'assets/adriana_grande.png';
import selena from 'assets/salena_gomez.jpg';
import taylor from 'assets/taylor_swift.jpg';
import bobice from 'assets/bo-bice.png';
import carrie from 'assets/carrie.png';

function RecentlyAdded (props) {
  return (
    <Grid.Column>
      <h2>Recently Added</h2>

      <div className="media">
        <img style={{width: '60px'}} src={bobice}/>
        <div className="media-content">
          <h3 className="media-content-text" >Bo Bice</h3>
          <button className="getBtn">GET</button>
        </div>
        <div className="clear"></div>
      </div>
      <div className="media">
        <img style={{width: '60px'}} src={carrie}/>
        <div className="media-content">
          <h3 className="media-content-text" >Carrie Underwood</h3>
          <button className="getBtn">GET</button>
        </div>
        <div className="clear"></div>
      </div>
    </Grid.Column>

  )
}

export default RecentlyAdded;



