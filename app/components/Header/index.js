import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import BitsBeat from './bitsbeat.png';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/icon">
            <FormattedMessage {...messages.icons} />
          </HeaderLink>
          <HeaderLink to="/icon/detail">
            <FormattedMessage {...messages.iconDetail} />
          </HeaderLink>
          <HeaderLink to="/user">
            <FormattedMessage {...messages.userDetail} />
          </HeaderLink>
          {/* <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink> */}
        </NavBar>
      </div>
    );
  }
}

export default Header;
