const models = require('../models');

const Account = models.Account;

const loginPage = (req, res) => {
  res.render('login');
};

const signupPage = (req, res) => {
  res.render('signup');
};

const logout = (req, res) => {
  res.redirect('/');
};

const login = (request, response) => {

};

const signup = (request, response) => {
    const req = request;
    const res = response;
    
    //cast to strings to cover up some security flaws
    req.body.username = `${req.body.username}`;
    req.body.pass = `${req.body.pass}`;
};

module.exports.loginPage = loginPage;
module.exports.login = login;
module.exports.logout = logout;
module.exports.signupPage = signupPage;
module.exports.signup = signup;
