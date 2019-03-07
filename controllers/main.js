var addressDataSource = require("../controllers/addressDataSource");
const user = {email: "test@test.com"};
var lastSearchResult = [];
var lastSearchTerms = { address: "", zipcode: ""};

var exports = module.exports = {};

// Display index page on GET.
exports.index = function (req, res) {
    const addresses = addressDataSource.addresses();
    var goToPage = 1;
    if (req.query.page) {
        const page = parseInt(req.query.page);
        if (page) {
            goToPage = page;
        }
    }

    const paginationInfo = paginate(addresses.length, 5, goToPage);
    res.render('page/index', { user: null,
                               addresses: addresses.slice(paginationInfo.startIndex, paginationInfo.endIndex),
                               isSearchResult: false,
                               pagination: paginationInfo});
};


// Display map page on GET
exports.map = function (req, res) {
    res.render('page/map', {user: null});
};

exports.tab = function(req, res) {
    res.render('page/tab');
};

// Handle Search Form on POST.
exports.search = function(req, res) {
    var address, zipcode;
    lastSearchTerms.address = "";
    lastSearchTerms.zipcode = "";

    if (req.body.address != null) {
        address = req.body.address;
        lastSearchTerms.address = address;
    }
    if (req.body.zipcode != null) {
        zipcode = req.body.zipcode;
        lastSearchTerms.zipcode = zipcode;
    }


    var matchingAddresses = [];
    if ((address !== null && address !== "") || (zipcode !== null && zipcode !== "")) {
        matchingAddresses = addressDataSource.searchAddresses(address, zipcode);
    }

    lastSearchResult = matchingAddresses;

    const paginationInfo = paginate(matchingAddresses.length, 5, 1);
    res.render('page/search', { user: user,
                                addresses: matchingAddresses.slice(paginationInfo.startIndex, paginationInfo.endIndex),
                                isSearchResult: true,
                                searchTerms: lastSearchTerms,
                                pagination: paginationInfo});
};

// Handle GET last search result on other pages.
exports.viewSearchPage = function(req, res) {
    const addresses = lastSearchResult;
    var goToPage = 1;
    if (req.query.page) {
        const page = parseInt(req.query.page);
        if (page) {
            goToPage = page;
        }
    }

    const paginationInfo = paginate(addresses.length, 5, goToPage);
    res.render('page/search', { user: user,
                                addresses: addresses.slice(paginationInfo.startIndex, paginationInfo.endIndex),
                                isSearchResult: true,
                                searchTerms: lastSearchTerms,
                                pagination: paginationInfo});
};

function paginate(lengthOfData, elementsPerPage, targetPage) {
    const totalPages = Math.ceil(lengthOfData / elementsPerPage);
    if (targetPage > 0 && targetPage <= totalPages) {
        return { page: targetPage,
                 totalPages: totalPages,
                 startIndex: (targetPage-1) * elementsPerPage,
                 endIndex: targetPage * elementsPerPage};
    }
    return { page: 1,
             totalPages: totalPages,
             startIndex: 0,
             endIndex: elementsPerPage};

}


exports.dialog = function (req, res) {
    res.render('page/dialog', {user: null});
};

