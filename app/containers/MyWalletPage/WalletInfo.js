import React from 'react';
import Link from "react-router-dom/Link";
import { Table, Label, Card, Image, Grid, Button } from 'semantic-ui-react';
import user from 'assets/img/user.jpg';
import defaultIdol from 'assets/default.jpg';
import IconList from '../../components/IconList';

function WalletInfo(props) {
  const { walletInfo, onCreateButtonsClick, currentAddress, addresses } = props;
  return (
    <div className="ui container text" id="content" role="main">
      <br />
      <br />
      <h1>My Wallet</h1>
      <Link style={{ float: 'left' }} to="/wallet"> <img src={defaultIdol} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
      </Link>
      <div style={{ overflow: 'hidden', paddingLeft: '20px' }}>
        {/* <h3>Jessica Alba</h3> */}
        {/* 23yrs / F<br /> */}
        {currentAddress == addresses.toJS()[0] &&
          <Button 
            primary
            onClick={()=> onCreateButtonsClick('/token/create')}
          >
            Create Token(IDOL)
          </Button>
        }

        <Button 
          style={{ paddingLeft: '20px' }}
          primary
          onClick={()=> onCreateButtonsClick('/transfer/token')}
        >
          Transfer Token (IDOL)
        </Button>
      </div>


      <Table celled compact>
        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Label ribbon><label className="idolLabel">Owner's Address:</label></Label>
            </Table.Cell>
            <Table.Cell>{walletInfo.get('address')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>SCORE Address:</Label></Table.Cell>
            <Table.Cell>{walletInfo.get('scoreAddress')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell> <Label ribbon>Token Balance:</Label></Table.Cell>
            <Table.Cell>{walletInfo.get('tokenBalance')}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>Token Symbol:</Label> </Table.Cell>
            <Table.Cell>{walletInfo.get('tokenType')} </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Label ribbon>ICX Balance:</Label> </Table.Cell>
            <Table.Cell>{walletInfo.get('ICXbalance')} </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

      <h2>List of Tokens</h2>
      {/* <label class="idolLabel">TokenId:</label>
      <a href="http://localhost:8080/iconmain/checkTokenDetails?address=hx65f6e18d378b57612a28f72acb97021eaa82aa5a&amp;tokenType=IDOL&amp;tokenId=cd8cfa02-adca-11e8-b29d-000c29be104e">
        cd8cfa02-adca-11e8-b29d-000c29be104e
        </a> */}
            <IconList resp={walletInfo} goTo={props.goTo} />

    </div >
  );
}

export default WalletInfo;