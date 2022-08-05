const jwt = require("jsonwebtoken");

// jwt.verify(token, secretOrPublicKey, [options, callback])
// verified before returning the decoded token
// call next() if the auth is successful

function authToken(req, res, next) {
  try {
    const decoded = jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.REFRESH_TOKEN_SECRET
    );

    req.userData = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      message: "You don't have permission",
    });
  }
}

module.exports = authToken;
