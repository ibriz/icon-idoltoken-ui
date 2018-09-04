import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'semantic-ui-react';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Icon from 'assets/img/icon.svg';
import user from 'assets/img/user.jpg';
import messages from './messages';
import Link from "react-router-dom/Link"

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <header style={{ padding: '0 20px', borderBottom: '1px solid #eee' }}>
        <Link to="/"><img src={Icon} /></Link>

        <div style={{ float: 'right' }}>
          <Dropdown style={{ padding: '20px 20px 0' }} text='Accounts'>
            <Dropdown.Menu>

              <Dropdown.Item>
                <Link to="/">
                  hx65f6e..
              </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/">
                  hx65f6e..
              </Link>
              </Dropdown.Item>
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

export default Header;
