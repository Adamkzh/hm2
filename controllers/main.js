var addressDataSource = require("../controllers/addressDataSource");
const user = {email: "test@test.com"};

var exports = module.exports = {};

// Display index page on GET.
exports.index = function (req, res) {
    res.render('page/index', { user: user, addresses: addressDataSource.addresses().slice(0,20), isSearchResult: false});
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


    var matchingAddresses = [];
    if ((address !== null && address !== "") || (zipcode !== null && zipcode !== "")) {
        matchingAddresses = addressDataSource.searchAddresses(address, zipcode);
    }
    res.render('page/search', { user: user, addresses: matchingAddresses, isSearchResult: true });
};

