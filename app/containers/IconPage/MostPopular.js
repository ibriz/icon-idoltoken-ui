import React from 'react';
import { Grid } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';

function MostPopular (props) {
  return (
    <Grid.Column>
      <h2>Most Popular Idols</h2>
      <div className="media">
        <img style={{ width: '40px' }} src={defaultIdol} />
        <div className="media-content">
          <h3>Jessica Alba</h3>
          <span className="faded">
            23,000 Tokens
          </span>
          <button className="getBtn">GET</button> </div>
        <div className="clear"></div>
      </div>

      <div className="media">
        <img style={{ width: '40px' }} src={defaultIdol} />
        <div className="media-content">
          <h3>Jessica Alba</h3>
          <span className="faded">
            23,000 Tokens
          </span>
          <button className="getBtn">GET</button> </div>
        <div className="clear"></div>
      </div>

      <div className="media">
        <img style={{ width: '40px' }} src={defaultIdol} />
        <div className="media-content">
          <h3>Jessica Alba</h3>
          <span className="faded">
            23,000 Tokens
          </span>
          <button className="getBtn">GET</button> </div>
        <div className="clear"></div>
      </div>

      <div className="media">
        <img style={{ width: '40px' }} src={defaultIdol} />
        <div className="media-content">
          <h3>Jessica Alba</h3>
          <span className="faded">
            23,000 Tokens
          </span>
          <button className="getBtn">GET</button> </div>
        <div className="clear"></div>
      </div>
    </Grid.Column>
  )
}

export default MostPopular;