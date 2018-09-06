import React from 'react';
import {Grid} from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';
import ariana from 'assets/adriana_grande.png';
import selena from 'assets/salena_gomez.jpg';
import taylor from 'assets/taylor_swift.png';

function MostPopular(props) {
  return (
    <Grid.Column>
      <h2>Most Popular Idols</h2>
      <div className="media">
        <img style={{width: '60px'}} src={taylor}/>
        <div className="media-content">`
          <h3>Taylor Swift</h3>
          <button className="getBtn">GET</button>
        </div>
        <div className="clear"></div>
      </div>

      <div className="media">
        <img style={{width: '60px'}} src={ariana}/>
        <div className="media-content">
          <h3>Ariana Grande</h3>
          <button className="getBtn">GET</button>
        </div>
        <div className="clear"></div>
      </div>

      <div className="media">
        <img style={{width: '60px'}} src={selena}/>
        <div className="media-content">
          <h3>Selena Gomez</h3>
          <button className="getBtn">GET</button>
        </div>
        <div className="clear"></div>
      </div>

    </Grid.Column>
  )
}

export default MostPopular;
