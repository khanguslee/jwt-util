const jwt = require("jsonwebtoken");

function generateValidToken(
  body = {},
  secret = "topsecret",
  expiresIn = "1000"
) {
  const token = jwt.sign(body, secret, {
    expiresIn,
  });
  return token;
}

function generateInvalidToken() {
  // Token expired
}

const token = generateValidToken();
console.log(token);
