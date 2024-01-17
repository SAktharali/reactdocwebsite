const jwt = require("jsonwebtoken");
// //req - have token
// //next -only token is valid further execution

module.exports = async (req, res, next) => {
  try {
    //     //authorization is 'a' small
    const token = req.headers["authorization"].split(" ")[1];
    //     // 1st is bearer and 2nd is token space(bearer) in home.js so array index = 1
    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, decoded) => {
      if (error) {
        //401 unauthorized
        return res.status(401).send({
          message: "authorization failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "authorization failed", //token unavailable
      success: false,
    });
  }
};
