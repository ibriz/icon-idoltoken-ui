import React from 'react';
import { Image, Card, Icon, Grid } from 'semantic-ui-react';
import user from "assets/img/user.jpg";

function IconList(props) {
  const { BonusBucks, CelebrityValues } = props.resp.toJS();
  const { goTo } = props;
  return (
    <div>
      {/* {hotIcons(BonusBucks, goTo)} */}
      {iconsList(CelebrityValues, goTo)}
    </div>
  )
}

// const hotIcons = (hotIcons, goTo) => {
//   return (
//     <div>
//       <h1>
//         Featured Idols
//         </h1>
//       <span className="caption">who is ordering services listed in contract</span>
//       <Grid selection="true" columns='four' divided>
//         <Grid.Row>
//           {hotIcons && hotIcons.map((item, index) => {
//             return (
//               IconCard(item, goTo)
//             );
//           })}
//         </Grid.Row>
//       </Grid>
//     </div>
//   );
// }

const iconsList = (iconsList, goTo) => {
  return (
    <div>
      <br />
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <h1>
          Featured Idols
         </h1>
        <span className="caption">who is ordering services listed in contract</span>
      </div>
      <br />
      <br />
      <Grid stackable doubling columns="4">
        {iconsList && iconsList.map((item, index) => {
          return (
            IconCard(item, goTo)
          );
        })}
      </Grid>
      <br />
      <br />
      <br />
      <Grid columns="2">
        <Grid.Column>
          <h2>Most Popular Idols</h2>
          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>
        </Grid.Column>
        <Grid.Column>
          <h2>Recenly Added</h2>
          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>

          <div className="media">
            <img style={{ width: '40px' }} src={user} />
            <div className="media-content">
              <h3>Jessica Alba</h3>
              <span className="faded">
                23,000 Tokens
</span>
              <button className="getBtn">GET</button> </div>
            <div className="clear"></div>
          </div>
        </Grid.Column>


      </Grid>

    </div >
  );
}


const IconCard = (item, goTo) => (
  <Grid.Column key={item.celebId} onClick={() => goTo(item.celebId)}>
    <Card>
      <Image src={`https://celebritybucks.com/images/celebs/full/${item.celebId}.jpg`} />
      <br /><Card.Content>
        <Card.Header><b>{item.name}</b></Card.Header>
        <label>Age:</label>21<br />
        <label>Gender:</label>M<br />
      </Card.Content>
    </Card>
  </Grid.Column>
)



export default IconList;