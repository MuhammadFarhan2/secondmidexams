const userDB = require("../model/model")

exports.createAccount = (req, res) => {
    console.log(req.body)
    if (!req.body) {
        return res.send("Content can not be null!")
    } else { console.log(`Content is: ${req.body.name}`) }

    const newAccount = new userDB({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        country: req.body.country,
        state: req.body.state,
        city: req.body.city,
        address: req.body.address,
        zip: req.body.zip,
    });

   
    newAccount
        .save(newAccount).then((result) => {
            res.redirect("registration")
        }).catch((err) => {
            res.send(`Error while saving: ${err.message}`)
        });
}

exports.findAccount = (req, res) => {
    userDB.find().then((result) => {
        res.send(result)
    }).catch((err) => {
        res.send(`Error while getting: ${err}`)
    });
}

