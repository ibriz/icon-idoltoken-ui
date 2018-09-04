import React from 'react';
import { Image, Card, Icon, Grid } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';

function IconList(props) {
  const { goTo, resp } = props;
  const { tokenList } = resp.toJS();
  return (
    <div>
      {iconsList(tokenList, goTo)}
    </div>
  )
}

const iconsList = (tokenList, goTo) => {
  return (
      <Grid stackable doubling columns="4">
        {tokenList && tokenList.map((item, index) => {
          return (
            IconCard(item, goTo)
          );
        })}
        {typeof(tokenList) == 'undefined'  || (tokenList && tokenList.length ==0) &&
          <h3>No Idols</h3>
        }
      </Grid>
  );
}


const IconCard = (item, goTo) => (
  <Grid.Column key={item.tokenId} onClick={() => goTo(item.tokenId)}>
    <Card>
      
      <Image src={defaultIdol} />
      <br /><Card.Content>
        <Card.Header><b>{item.name}</b></Card.Header>
        <label>Age:</label>{item.age}<br />
        <label>Gender:</label>{item.gender}<br />
      </Card.Content>

    </Card>
  </Grid.Column>
)



export default IconList;