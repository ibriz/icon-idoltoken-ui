import React from 'react';
import { Image, Card, Icon, Grid } from 'semantic-ui-react'

function IconList (props) {
  const { BonusBucks, CelebrityValues } = props.resp.toJS();
  const { goTo } = props;
  return (
    <div>
      {hotIcons(BonusBucks, goTo)}
      {iconsList(CelebrityValues, goTo)}
    </div>
  )
}

const hotIcons = (hotIcons, goTo) => {
 return (
  <div>
    <h1>
      HOT ICON LIST
    </h1>
    <Grid selection="true" columns='two' divided>
        <Grid.Row>
          {hotIcons && hotIcons.map((item, index)=>{
            return(
              IconCard(item, goTo)
            );
          })}
        </Grid.Row>
      </Grid>
  </div>
 );
}

const iconsList = (iconsList, goTo) => {
  return (
    <div>
      <h1>
        ICONS LIST
      </h1>
      <Grid selection="true" columns='two' divided>
        <Grid.Row>
          {iconsList && iconsList.map((item, index)=>{
            return(
              IconCard(item, goTo)
            );
          })}
        </Grid.Row>
      </Grid>
    </div>
   );
}


const IconCard = (item, goTo) => (
  <Grid.Column key={item.celebId} onClick={()=>goTo(item.celebId)}>
    <Card>
      <Image src={`https://celebritybucks.com/images/celebs/full/${item.celebId}.jpg`} />
      <Card.Content>
        <Card.Header>{item.name}</Card.Header>
        {/* <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Matthew is a musician living in Nashville.</Card.Description> */}
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='dollar' />
          {item.price}
        </a>
      </Card.Content>
    </Card>
  </Grid.Column>
)



export default IconList;