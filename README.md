# About bitsbeat?

The three close friends-turned colleagues’ passion towards technology gave birth to Bitsbeat. While working as software developers for one of the leading tech companies in Nepal we realized the limitless opportunities in technology and our combined capacity to ignite the tech revolution. The idea of initiating Bitsbeat was instantly born as we envisioned developing solutions to simplify lives, empower people and contribute to global economy by capitalizing emerging technologies. Our dedication, passion and hard work backed by risk-sharing ability led to the formation of a legal company.

  
During the first six months of commencement, we were focused on developing Nodebeats, one of our featured products intended to serve the global tech community. We have always been concerned more about serving and giving back to the technology rather than business and profit-making. Therefore, we invested our technical knowledge and skills to develop Nodebeats and justify our passion, skills and commitment to serve the technology. We always have a belief that once you acquire practical skills and expertise in what you have learned in academics the business will just follow.

**You can know more about bitsbeat and its family by exploring our website** :
[bitsbeat.com](https://www.bitsbeat.com)


## About IdolToken 
For this demo application, there are three accounts created designed to demonstrate how NFT could be created and transfered from one account to another.  The token amount is a random ICX value assigned to the NFT. 

**Note:** Go through JAVA API before running React App

### JAVA API


The webapp interacts with the APIs provided at
> **https://github.com/ibriz/icon-idoltoken-api**


### React App
This is the frontend Reactjs app for IdolToken project.
```sh
$ git clone https://gitlab.com/bitsbeat/icon.git
$ cd icon
$ git branch
$ npm install -d
$ npm start

# by default the application loads up at http://localhost:3000
```

### Libraries Used
 - redux-saga

## Internals 
It has multiple pages that handles the workflow of Idol Tokens. 
 - **Homepage for the IdolProject** ([../app/containers/IconPage][homepage])
 - **Create Idol Token** ([../app/containers/CreateIconPage][create])
 - **Idol Token Detail page** ([../app/containers/IconDetailPage][details])
 - **My Wallet Page** ([../app/containers/MyWalletPage][mywallet])
 - **Transfer Idol Token** ([../app/containers/TransferTokenPage][transfer])


  [homepage]: <https://gitlab.com/bitsbeat/icon/tree/master/app/containers/IconPage>
  [create]: <https://gitlab.com/bitsbeat/icon/tree/master/app/containers/CreateIconPage>
  [details]: <https://gitlab.com/bitsbeat/icon/tree/master/app/containers/IconDetailPage>
  [mywallet]: <https://gitlab.com/bitsbeat/icon/tree/master/app/containers/MyWalletPage>
  [transfer]: <https://gitlab.com/bitsbeat/icon/tree/master/app/containers/TransferTokenPage>
