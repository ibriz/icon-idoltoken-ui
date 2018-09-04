import React from 'react';
import Link from "react-router-dom/Link";
import { Table, Label, Card, Image, Grid } from 'semantic-ui-react';
import user from 'assets/img/user.jpg';
function WalletInfo(props) {
  return (
    <div className="ui container text" id="content" role="main">

      {/* <h1>Accounts</h1>
      <p>
        <a href="http://localhost:8080/iconmain/checkAccountPage?address=hx65f6e18d378b57612a28f72acb97021eaa82aa5a&amp;tokenType=IDOL">
          hx65f6e18d378b57612a28f72acb97021eaa82aa5a
          </a>
      </p><br />

      <p>
        <a href="http://localhost:8080/iconmain/checkAccountPage?address=hx2a7c46497d99e64d7198c267b5ca7deca265a4f8&amp;tokenType=IDOL">
          hx2a7c46497d99e64d7198c267b5ca7deca265a4f8
          </a>
      </p><br />

      <p>
        <a href="http://localhost:8080/iconmain/checkAccountPage?address=hx40ebd13225ed28f7e98be3cd833ebe555cba72ca&amp;tokenType=IDOL">
          hx40ebd13225ed28f7e98be3cd833ebe555cba72ca
          </a>
      </p><br />
      <hr /> */}

      <br />
      <br />
      <h1>My Wallet</h1>
      <Link style={{ float: 'left' }} to="/wallet"> <img src={user} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </Link>
      <div style={{ overflow: 'hidden', paddingLeft: '20px' }}>
        <h3>Jessica Alba</h3>
        23yrs / F<br />
        <Link to="/token/create" >
          Create Token(IDOL)
              </Link >

        <Link style={{ paddingLeft: '20px' }} to="/transfer/token">
          Transfer Token (IDOL)
              </Link>
      </div>


      <Table celled compact>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon><label class="idolLabel">Owner's Address:</label></Label>
            </Table.Cell>
            <Table.Cell>hx65f6e18d378b57612a28f72acb97021eaa82aa5a</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>SCORE Address:</Label></Table.Cell>
            <Table.Cell>cx0bce5bfe899c4beec7ea93f2000e16351191017e</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> <Label ribbon>Token Balance:</Label></Table.Cell>
            <Table.Cell> 100</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>Token Symbol:</Label> </Table.Cell>
            <Table.Cell>IDOL </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>ICX Balance:</Label> </Table.Cell>
            <Table.Cell>300 </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <h2>List of Tokens</h2>
      {/* <label class="idolLabel">TokenId:</label>
      <a href="http://localhost:8080/iconmain/checkTokenDetails?address=hx65f6e18d378b57612a28f72acb97021eaa82aa5a&amp;tokenType=IDOL&amp;tokenId=cd8cfa02-adca-11e8-b29d-000c29be104e">
        cd8cfa02-adca-11e8-b29d-000c29be104e
        </a> */}
      <Grid columns="4">
        <Grid.Column>
          <Card>
            <Card.Content>
              <Image src={`https://celebritybucks.com/images/celebs/full/9185.jpg`} /><br />
              <br />
              <Card.Header><b>Adam Hunt</b></Card.Header>
              <label>Age:</label>21<br />
              <label>Gender:</label>M<br />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
      <br />
    </div >
  );
}

export default WalletInfo;