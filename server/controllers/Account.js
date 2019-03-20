const models = require('../models');

const Account = models.Account;

const loginPage = (req, res) => {
    res.render('login');
};