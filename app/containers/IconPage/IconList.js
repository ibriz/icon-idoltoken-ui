import React from 'react';
import { Image, Card, Icon, Grid } from 'semantic-ui-react';

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
    <div style={{ textAlign: 'center' }}>
      <br />
      <br />
      <br />
      <h1>
        Featured Idols
         </h1>
      <span className="caption">who is ordering services listed in contract</span>
      <br />
      <br />
      <Grid stackable doubling columns="4">
        {iconsList && iconsList.map((item, index) => {
          return (
            IconCard(item, goTo)
          );
        })}
      </Grid>
    </div>
  );
}


const IconCard = (item, goTo) => (
  <Grid.Column key={item.celebId} onClick={() => goTo(item.celebId)}>
    <Card>
      <Image src={`https://celebritybucks.com/images/celebs/full/${item.celebId}.jpg`} />
      <Card.Content>
        <Card.Header><b>{item.name}</b></Card.Header>
        <span> ${item.price}</span>
      </Card.Content>

    </Card>
  </Grid.Column>
)



export default IconList;