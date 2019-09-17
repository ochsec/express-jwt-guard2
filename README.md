
  # express-jwt-guard2
---
An Expressjs route guard middleware function that checks for a web token and verifies it against a secret. 

Requires a .env file in the root directory of the Express app with a SECRET key

    SECRET=secretstring

### Usage
    const express = require('express');
    const jwtGuard = require('express-jwt-guard2');
    const router = express.Router();

    router.use(jwtGuard);
    
    router.get('/', (req, res) => {
        // router logic
        // no token --> returns 403 with message 'No token provided.'
        // invalid token --> returns 401 with message 'Failed to authenticate token.'
    }
 
### NPM Dependencies
- dotenv
- jsonwebtoken
  
      npm i dotenv jsonwebtoken --save