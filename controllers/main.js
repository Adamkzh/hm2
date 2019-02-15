var faker = require('faker');

var exports = module.exports = {};

const user = {email: "test@test.com"};



// module.exports.index = function(req, res)
exports.index = function (req, res) {
    res.render('page/index', { user: user });
};


exports.search = function(req, res) {
    var input_address = req.body.address;
    const addresses = randomAddress();
    console.log(addresses);
    for (var i = 0; i < addresses.length; i++) {
        console.log(addresses[i]);
        console.log(typeof(addresses[i]));
        console.log(addresses[i].title);
    }
    // res.send(addresses);

    res.render('page/search', { user: user, addresses: addresses });
};


function randomAddress() {
    var addresses = new Array();
    for (let i = 0; i < 10; i++) {
        addresses.push({
            title: faker.address.streetAddress(),
            image: faker.image.image(),
            description: faker.address.latitude() + ", " +faker.address.longitude()
        });
    }
    return addresses;
}
