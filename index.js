const dotenv = require('dotenv');
dotenv.config();
var jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            if (err) {
                return res.status(401).send({ success: false, message: 'Failed to authenticate token.' });
            }
            req.decoded = decoded;
            next();
        });
    } else {
        return res.status(403).send({
            success: false,
            message: 'No token provided',
        });
    }
}

module.exports = jwtAuthGuard;
