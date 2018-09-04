import React from 'react';
import Link from "react-router-dom/Link"

function WalletInfo(props) {
  return (
    <div id="content" role="main">

      <Link to="/token/create">
        Create Token (IDOL)
              </Link>
      <Link to="/transfer/token">
        Transfer Token (IDOL)
              </Link>

      <section class="row colset-2-its">
        <hr />
        <label class="idolLabel">Accounts:</label><br />
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
        <hr />

        <label class="idolLabel">Owner's Address:</label> hx65f6e18d378b57612a28f72acb97021eaa82aa5a<br />
        <label class="idolLabel">SCORE Address:</label> cx0bce5bfe899c4beec7ea93f2000e16351191017e<br />
        <label class="idolLabel">Token Balance:</label> 1<br />
        <label class="idolLabel">Token Symbol:</label> IDOL<br />
        <label class="idolLabel">ICX Balance:</label> 0<br /><hr />
        <label class="idolLabel">List of Tokens:</label><br /><hr />

        <label class="idolLabel">TokenId:</label>
        <a href="http://localhost:8080/iconmain/checkTokenDetails?address=hx65f6e18d378b57612a28f72acb97021eaa82aa5a&amp;tokenType=IDOL&amp;tokenId=cd8cfa02-adca-11e8-b29d-000c29be104e">
          cd8cfa02-adca-11e8-b29d-000c29be104e
        </a>
        <br />
        <label class="idolLabel">Name:</label>Adam Hunt<br />
        <label class="idolLabel">Age:</label>0x1e<br />
        <label class="idolLabel">Gender:</label>M<br />
        <label class="idolLabel">Ipfs Handle:</label>0xabcde12346<br />
        <label class="idolLabel">Token Owner:</label>hx65f6e18d378b57612a28f72acb97021eaa82aa5a<br />
        <hr /><br />
      </section>
    </div>
  );
}

export default WalletInfo;