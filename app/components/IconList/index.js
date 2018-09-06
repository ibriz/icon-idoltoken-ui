import React from 'react';
import { Image, Card, Icon, Grid } from 'semantic-ui-react';
import defaultIdol from 'assets/default.jpg';

function IconList(props) {
  const { goTo, resp, images } = props;
  const { tokenList } = resp.toJS();
  return (
    <div>
      {iconsList(tokenList, goTo, images)}
    </div>
  )
}

const iconsList = (tokenList, goTo, images) => {
  return (
      <Grid stackable doubling columns="4">
        {tokenList && tokenList.map((item, index) => {
          return (
            IconCard(item, goTo, images)
          );
        })}
        {typeof(tokenList) == 'undefined'  || (tokenList && tokenList.length ==0) &&
          <h3>No Idols</h3>
        }
      </Grid>
  );
}


const IconCard = (item, goTo, images) => (
  <Grid.Column key={item.tokenId} onClick={() => goTo(item.tokenId)}>
    <Card>
      {images && Object.keys(images).includes(item.ipfs_handle) &&
        <img src={`data:image/jpg;base64,${images[item.ipfs_handle]/* .replace(/[↵]/g, '') */}`} />
      }
      {images && !Object.keys(images).includes(item.ipfs_handle) &&
        <Image src={defaultIdol} />
      }
      <br /><Card.Content>
        <Card.Header><b>{item.name}</b></Card.Header>
        <label>Age:</label>{item.age}<br />
        <label>Gender:</label>{item.gender}<br />
        <label>Price:</label>{item.price || '0'}<br />
      </Card.Content>

    </Card>
  </Grid.Column>
)



export default IconList;