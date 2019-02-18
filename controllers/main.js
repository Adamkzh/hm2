var faker = require('faker');

var exports = module.exports = {};

faker.locale = "en_US";
const user = {email: "test@test.com"};
var randomAddresses = [];


// Display index page on GET.
exports.index = function (req, res) {
    if (randomAddresses.keys.length == 0) randomAddresses = getRandomAddress(20);
    res.render('page/index', { user: user, addresses: randomAddresses, isSearchResult: false});
};


// Handle Search Form on POST.
exports.search = function(req, res) {
    var address, zipcode;
    if (req.body.address != null) {
        address = req.body.address;
    }
    if (req.body.zipcode != null) {
        zipcode = req.body.zipcode;
    }
    // console.log("address:" + address + " zipcode:" + zipcode);


    var matchingAddresses = randomAddresses;
    if ((address !== null && address !== "") || (zipcode !== null && zipcode !== "")) {
        matchingAddresses = searchAddresses(address, zipcode);
    }
    res.render('page/search', { user: user, addresses: matchingAddresses, isSearchResult: true });
};

function searchAddresses(address, zipcode) {
    if (randomAddresses == null || randomAddresses.length == 0) {
        randomAddresses = getRandomAddress(30);
    }

    var result = [];
    if (address !== "" && zipcode !== "") {
        randomAddresses.forEach(function (element) {
            if (element.address.includes(address) && element.zipcode === zipcode) {
                result.push(element);
            }
        });
    } else if (address !== "") {
        randomAddresses.forEach(function (element) {
            if (element.address.includes(address)) {
                result.push(element);
            }
        });

    } else if (zipcode !== "") {
        randomAddresses.forEach(function (element) {
            if (element.zipcode === zipcode) {
                result.push(element);
            }
        });
    }
    return result;
}


function getRandomAddress(num) {
    var addresses = new Array();
    for (let i = 0; i < num; i++) {
        addresses.push({
            address: faker.address.streetAddress() + "," + faker.address.city() + ',' + faker.address.stateAbbr(),
            zipcode: faker.address.zipCode(),
            image: faker.image.image(),
            description: faker.address.latitude() + ", " +faker.address.longitude()
        });
    }
    return addresses;
}
