# GraphQL-Node.js-express Exercise

Practice following ["Build A GraphQL Server" - playlist](https://www.youtube.com/playlist?list=PLillGF-RfqbYZty73_PHBqKRDnv7ikh68) by [Traversy Media](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)

## Prerequisites

Must have node.js installed

## Installation

1. Create folder

2. Open terminal inside the folder

3. Run `$ npm init`

    - Return
    - Return
    - Description: simple GraphQL server
    - entry point: sever.js
    - Return
    - Return
    - Return
    - author: Nico Rithner
    - license: MIT   // free for people to use
    -  yes

4. Run  `$ npm install express express-graphql  graphql nodemon  --save`

5. Touch server.js in the main directory, in my case with VSCode `$ code server.js` 

```Javascript	
const express = require(‘express’);
const app = express ();

app.listen(4000, () => {
  console.log('Sever is running on port 4000...');
});
```

6. In package.json  in the scripts block remove current text and add

```json
“dev:server: “nodemon server.js”
```

7. Test it out in the terminal with:

    `$ npm run dev:server`

<hr/>

## Sample Code

<p align="center">
  <img src="sample_query_customer.png" width='500'><br/>
  <small>Sample Query and Code</small>
</p>