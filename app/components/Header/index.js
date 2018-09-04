import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Dropdown } from 'semantic-ui-react';
import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Icon from 'assets/img/icon.svg';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={Icon} />
        <Dropdown text='ICON Operations'>
          <Dropdown.Menu>
            <Dropdown.Item text='New' />
            <Dropdown.Item text='Open...' description='ctrl + o' />
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='ICON Operatoins'>
          <Dropdown.Menu>
            <Dropdown.Item text='New' />
            <Dropdown.Item text='Open...' description='ctrl + o' />
          </Dropdown.Menu>
        </Dropdown>

        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/icon">
            <FormattedMessage {...messages.icons} />
          </HeaderLink>

          <HeaderLink to="/user">
            <FormattedMessage {...messages.userDetail} />
          </HeaderLink>
          {/* <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink> */}
        </NavBar>
      </header>
    );
  }
}

export default Header;
