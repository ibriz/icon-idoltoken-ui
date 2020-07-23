import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import Icon from 'assets/img/icon.svg';
import user from 'assets/img/user.jpg';
import defaultIcon from 'assets/default.jpg';

import Link from "react-router-dom/Link"

import { makeSelectAddresses, makeSelectCurrentAddress } from '../../containers/App/selectors';
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
  state = {
    currentAddress: ''
  };

  setCurrentAddress = (address) => {
    this.props.setCurrentAddress(address);
  }

  render() {
    const { addresses, currentAddress } = this.props;
    return (
      <header style={{ padding: '0 20px', borderBottom: '1px solid #eee' }}>
        <Link to="/"><img src={Icon} /></Link>

        <div style={{ float: 'right' }}>
          <span style={{fontStyle:'italic', color: 'gray'}}>{currentAddress.slice(0,8) + " ... " + currentAddress.slice(-8,)}</span>
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
              <Dropdown.Item>
                <a href="https://icon.foundation/?lang=en" target="_blank">ICON Foundation</a>
              </Dropdown.Item>

              <Dropdown.Item>
                <a href="https://tracker.icon.foundation/" target="_blank">ICON Token(ICX)</a>
              </Dropdown.Item>

              {/* <Dropdown.Item text='Sample ICON' /> */}
            </Dropdown.Menu>
          </Dropdown>

          <Link to="/wallet"> <img src={defaultIcon} style={{ width: '40px', height: '40px', position: 'relative', top: '5px' }} />
          </Link>
        </div>
      </header >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  addresses : makeSelectAddresses(),
  currentAddress: makeSelectCurrentAddress(),
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