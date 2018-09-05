import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Icon from 'assets/img/icon.svg';
import user from 'assets/img/user.jpg';
import Link from "react-router-dom/Link"

import { makeSelectAddresses } from '../../containers/App/selectors';
import reducer from '../../containers/App/reducer';
import { setCurrentAddress } from '../../containers/App/actions';

import injectReducer from 'utils/injectReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  setCurrentAddress = (address) => {
    this.props.setCurrentAddress(address);
  }

  render() {
    const { addresses } = this.props;
    return (
      <header style={{ padding: '0 20px', borderBottom: '1px solid #eee' }}>
        <Link to="/"><img src={Icon} /></Link>

        <div style={{ float: 'right' }}>
          <Dropdown style={{ padding: '20px 20px 0' }} text='Accounts'>
            <Dropdown.Menu>
              { addresses && addresses.map((item, index)=>{
                return (
                  <Dropdown.Item key={`${index}_${item}`} onClick={() => this.setCurrentAddress(item)}>
                    {/* <Link to="/"> */}
                    {item}
                    {/* </Link> */}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown style={{ padding: '20px 20px 0' }} text='About'>
            <Dropdown.Menu>
              <Dropdown.Item text='ICON Foundation' />
              <Dropdown.Item text='ICON Token(ICX)' />
              <Dropdown.Item text='Sample ICON' />
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/wallet"> <img src={user} style={{ width: '40px', height: '40px', position: 'relative', top: '5px' }} />
          </Link>
        </div>
      </header >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addresses : makeSelectAddresses()
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentAddress :(address) => dispatch(setCurrentAddress(address))
})

const withReducer = injectReducer({ key: 'global', reducer });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(
  withReducer,
  withConnect,
)(Header);