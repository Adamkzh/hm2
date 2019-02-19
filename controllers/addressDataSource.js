const faker = loadFaker();
const bayAreaCities = getBayAreaCities();
const badImageIDs = getBadImageIDs();
const randomAddresses = getRandomAddress(1000);

var exports = module.exports = {};

exports.addresses = function () {
    return randomAddresses;
};

exports.searchAddresses = function (address, zipcode) {
    address = address.toLowerCase();
    var result = [];
    if (address !== "" && zipcode !== "") {
        randomAddresses.forEach(function (element) {
            if (element.address.toLowerCase().includes(address) && element.zipcode === zipcode) {
                result.push(element);
            }
        });
    } else if (address !== "") {
        randomAddresses.forEach(function (element) {
            if (element.address.toLowerCase().includes(address)) {
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

function loadFaker() {
    var faker = require('faker');
    faker.locale = "en_US";
    return faker;
}

function getRandomAddress(num) {
    var addresses = new Array();
    for (let i = 0; i < num; i++) {
        var imageID = Math.floor(Math.random() * 1084);
        // Remove bad image id
        while (badImageIDs.includes(imageID)) {
            imageID = Math.floor(Math.random() * 1084);
        }
        var randomCity = bayAreaCities[Math.floor(Math.random() * (bayAreaCities.length-1))];

        addresses.push({
            address: faker.address.streetAddress() + ", " + randomCity.city,
            zipcode: randomCity.zipcode,
            image: "https://picsum.photos/300/300?image="+imageID,
            latitude: faker.address.latitude(),
            longitude: faker.address.longitude()
        });
    }
    return addresses;
}

function getBadImageIDs() {
    return [86, 97, 105, 138, 148, 150, 205, 207, 224, 226, 245, 246, 262, 285, 286, 298, 303, 332, 333, 346, 359, 394,
        414, 422, 438, 462, 463, 470, 489, 540, 561, 578, 587, 589, 592, 595, 597, 601, 624, 632, 636, 644, 647, 673,
        697, 706, 707, 708, 709, 710, 711, 712, 713, 714, 720, 725, 734, 745, 746, 747, 748, 749, 750, 751, 752, 753,
        754, 759, 761, 762, 763, 771, 792, 801, 812, 843, 850, 854, 895, 897, 899, 917, 920, 934, 956, 963, 968, 1007,
        1017, 1030, 1034, 1046];
}

function getBayAreaCities() {
    return [
        {
            "city": "Alameda, CA",
            "zipcode": "94502"
        },
        {
            "city": "Alameda, CA",
            "zipcode": "94501"
        },
        {
            "city": "Alamo, CA",
            "zipcode": "94507"
        },
        {
            "city": "Albany, CA",
            "zipcode": "94706"
        },
        {
            "city": "Alviso, CA",
            "zipcode": "95002"
        },
        {
            "city": "American Canyon, CA",
            "zipcode": "94503"
        },
        {
            "city": "Antioch, CA",
            "zipcode": "94509"
        },
        {
            "city": "Antioch, CA",
            "zipcode": "94531"
        },
        {
            "city": "Atherton, CA",
            "zipcode": "94027"
        },
        {
            "city": "Belmont, CA",
            "zipcode": "94002"
        },
        {
            "city": "Belvedere Tiburon, CA",
            "zipcode": "94920"
        },
        {
            "city": "Benicia, CA",
            "zipcode": "94510"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94708"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94720"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94707"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94710"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94709"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94703"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94704"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94702"
        },
        {
            "city": "Berkeley, CA",
            "zipcode": "94705"
        },
        {
            "city": "Birds Landing, CA",
            "zipcode": "94512"
        },
        {
            "city": "Brentwood, CA",
            "zipcode": "94513"
        },
        {
            "city": "Brisbane, CA",
            "zipcode": "94005"
        },
        {
            "city": "Burlingame, CA",
            "zipcode": "94010"
        },
        {
            "city": "Byron, CA",
            "zipcode": "94514"
        },
        {
            "city": "Castro Valley, CA",
            "zipcode": "94546"
        },
        {
            "city": "Castro Valley, CA",
            "zipcode": "94552"
        },
        {
            "city": "Clayton, CA",
            "zipcode": "94517"
        },
        {
            "city": "Concord, CA",
            "zipcode": "94520"
        },
        {
            "city": "Concord, CA",
            "zipcode": "94521"
        },
        {
            "city": "Concord, CA",
            "zipcode": "94519"
        },
        {
            "city": "Concord, CA",
            "zipcode": "94518"
        },
        {
            "city": "Corte Madera, CA",
            "zipcode": "94925"
        },
        {
            "city": "Crockett, CA",
            "zipcode": "94525"
        },
        {
            "city": "Daly City, CA",
            "zipcode": "94015"
        },
        {
            "city": "Daly City, CA",
            "zipcode": "94014"
        },
        {
            "city": "Danville, CA",
            "zipcode": "94526"
        },
        {
            "city": "Danville, CA",
            "zipcode": "94506"
        },
        {
            "city": "Diablo, CA",
            "zipcode": "94528"
        },
        {
            "city": "Dixon, CA",
            "zipcode": "95620"
        },
        {
            "city": "Dublin, CA",
            "zipcode": "94568"
        },
        {
            "city": "El Cerrito, CA",
            "zipcode": "94530"
        },
        {
            "city": "El Sobrante, CA",
            "zipcode": "94803"
        },
        {
            "city": "Emeryville, CA",
            "zipcode": "94608"
        },
        {
            "city": "Fairfax, CA",
            "zipcode": "94930"
        },
        {
            "city": "Fairfield, CA",
            "zipcode": "94533"
        },
        {
            "city": "Forest Knolls, CA",
            "zipcode": "94933"
        },
        {
            "city": "Fremont, CA",
            "zipcode": "94555"
        },
        {
            "city": "Fremont, CA",
            "zipcode": "94536"
        },
        {
            "city": "Fremont, CA",
            "zipcode": "94539"
        },
        {
            "city": "Fremont, CA",
            "zipcode": "94538"
        },
        {
            "city": "Greenbrae, CA",
            "zipcode": "94904"
        },
        {
            "city": "Half Moon Bay, CA",
            "zipcode": "94019"
        },
        {
            "city": "Hayward, CA",
            "zipcode": "94541"
        },
        {
            "city": "Hayward, CA",
            "zipcode": "94542"
        },
        {
            "city": "Hayward, CA",
            "zipcode": "94544"
        },
        {
            "city": "Hayward, CA",
            "zipcode": "94545"
        },
        {
            "city": "Hercules, CA",
            "zipcode": "94547"
        },
        {
            "city": "Lafayette, CA",
            "zipcode": "94549"
        },
        {
            "city": "Lagunitas, CA",
            "zipcode": "94938"
        },
        {
            "city": "Larkspur, CA",
            "zipcode": "94939"
        },
        {
            "city": "Livermore, CA",
            "zipcode": "94550"
        },
        {
            "city": "Los Altos, CA",
            "zipcode": "94022"
        },
        {
            "city": "Los Altos, CA",
            "zipcode": "94024"
        },
        {
            "city": "Martinez, CA",
            "zipcode": "94553"
        },
        {
            "city": "Menlo Park, CA",
            "zipcode": "94025"
        },
        {
            "city": "Mill Valley, CA",
            "zipcode": "94941"
        },
        {
            "city": "Millbrae, CA",
            "zipcode": "94030"
        },
        {
            "city": "Milpitas, CA",
            "zipcode": "95035"
        },
        {
            "city": "Moraga, CA",
            "zipcode": "94556"
        },
        {
            "city": "Moss Beach, CA",
            "zipcode": "94038"
        },
        {
            "city": "Mount Hamilton, CA",
            "zipcode": "95140"
        },
        {
            "city": "Mountain View, CA",
            "zipcode": "94043"
        },
        {
            "city": "Mountain View, CA",
            "zipcode": "94035"
        },
        {
            "city": "Mountain View, CA",
            "zipcode": "94040"
        },
        {
            "city": "Napa, CA",
            "zipcode": "94558"
        },
        {
            "city": "Napa, CA",
            "zipcode": "94559"
        },
        {
            "city": "Newark, CA",
            "zipcode": "94560"
        },
        {
            "city": "Nicasio, CA",
            "zipcode": "94946"
        },
        {
            "city": "Novato, CA",
            "zipcode": "94949"
        },
        {
            "city": "Novato, CA",
            "zipcode": "94945"
        },
        {
            "city": "Novato, CA",
            "zipcode": "94947"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94601"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94611"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94618"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94609"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94607"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94610"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94602"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94612"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94606"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94619"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94605"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94613"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94621"
        },
        {
            "city": "Oakland, CA",
            "zipcode": "94603"
        },
        {
            "city": "Oakley, CA",
            "zipcode": "94561"
        },
        {
            "city": "Orinda, CA",
            "zipcode": "94563"
        },
        {
            "city": "Pacifica, CA",
            "zipcode": "94044"
        },
        {
            "city": "Palo Alto, CA",
            "zipcode": "94301"
        },
        {
            "city": "Palo Alto, CA",
            "zipcode": "94303"
        },
        {
            "city": "Palo Alto, CA",
            "zipcode": "94304"
        },
        {
            "city": "Palo Alto, CA",
            "zipcode": "94306"
        },
        {
            "city": "Petaluma, CA",
            "zipcode": "94954"
        },
        {
            "city": "Pinole, CA",
            "zipcode": "94564"
        },
        {
            "city": "Pittsburg, CA",
            "zipcode": "94565"
        },
        {
            "city": "Pleasant Hill, CA",
            "zipcode": "94523"
        },
        {
            "city": "Pleasanton, CA",
            "zipcode": "94588"
        },
        {
            "city": "Pleasanton, CA",
            "zipcode": "94566"
        },
        {
            "city": "Port Costa, CA",
            "zipcode": "94569"
        },
        {
            "city": "Portola Valley, CA",
            "zipcode": "94028"
        },
        {
            "city": "Redwood City, CA",
            "zipcode": "94065"
        },
        {
            "city": "Redwood City, CA",
            "zipcode": "94063"
        },
        {
            "city": "Redwood City, CA",
            "zipcode": "94062"
        },
        {
            "city": "Redwood City, CA",
            "zipcode": "94061"
        },
        {
            "city": "Richmond, CA",
            "zipcode": "94801"
        },
        {
            "city": "Richmond, CA",
            "zipcode": "94805"
        },
        {
            "city": "Richmond, CA",
            "zipcode": "94804"
        },
        {
            "city": "Rio Vista, CA",
            "zipcode": "94571"
        },
        {
            "city": "Rodeo, CA",
            "zipcode": "94572"
        },
        {
            "city": "San Anselmo, CA",
            "zipcode": "94960"
        },
        {
            "city": "San Bruno, CA",
            "zipcode": "94066"
        },
        {
            "city": "San Carlos, CA",
            "zipcode": "94070"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94103"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94109"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94115"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94105"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94104"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94118"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94130"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94123"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94133"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94129"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94111"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94121"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94102"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94108"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94117"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94122"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94114"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94107"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94110"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94131"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94116"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94124"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94127"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94132"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94112"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94134"
        },
        {
            "city": "San Francisco, CA",
            "zipcode": "94128"
        },
        {
            "city": "San Geronimo, CA",
            "zipcode": "94963"
        },
        {
            "city": "San Jose, CA",
            "zipcode": "95134"
        },
        {
            "city": "San Leandro, CA",
            "zipcode": "94577"
        },
        {
            "city": "San Leandro, CA",
            "zipcode": "94578"
        },
        {
            "city": "San Leandro, CA",
            "zipcode": "94579"
        },
        {
            "city": "San Lorenzo, CA",
            "zipcode": "94580"
        },
        {
            "city": "San Mateo, CA",
            "zipcode": "94401"
        },
        {
            "city": "San Mateo, CA",
            "zipcode": "94402"
        },
        {
            "city": "San Mateo, CA",
            "zipcode": "94404"
        },
        {
            "city": "San Mateo, CA",
            "zipcode": "94403"
        },
        {
            "city": "San Pablo, CA",
            "zipcode": "94806"
        },
        {
            "city": "San Quentin, CA",
            "zipcode": "94964"
        },
        {
            "city": "San Rafael, CA",
            "zipcode": "94903"
        },
        {
            "city": "San Rafael, CA",
            "zipcode": "94901"
        },
        {
            "city": "San Ramon, CA",
            "zipcode": "94583"
        },
        {
            "city": "Sausalito, CA",
            "zipcode": "94965"
        },
        {
            "city": "Sonoma, CA",
            "zipcode": "95476"
        },
        {
            "city": "South San Francisco, CA",
            "zipcode": "94080"
        },
        {
            "city": "Stanford, CA",
            "zipcode": "94305"
        },
        {
            "city": "Stinson Beach, CA",
            "zipcode": "94970"
        },
        {
            "city": "Suisun City, CA",
            "zipcode": "94585"
        },
        {
            "city": "Sunnyvale, CA",
            "zipcode": "94089"
        },
        {
            "city": "Sunnyvale, CA",
            "zipcode": "94085"
        },
        {
            "city": "Sunnyvale, CA",
            "zipcode": "94086"
        },
        {
            "city": "Sunnyvale, CA",
            "zipcode": "94087"
        },
        {
            "city": "Sunol, CA",
            "zipcode": "94586"
        },
        {
            "city": "Travis Afb, CA",
            "zipcode": "94535"
        },
        {
            "city": "Union City, CA",
            "zipcode": "94587"
        },
        {
            "city": "Vallejo, CA",
            "zipcode": "94591"
        },
        {
            "city": "Vallejo, CA",
            "zipcode": "94592"
        },
        {
            "city": "Vallejo, CA",
            "zipcode": "94589"
        },
        {
            "city": "Vallejo, CA",
            "zipcode": "94590"
        },
        {
            "city": "Walnut Creek, CA",
            "zipcode": "94598"
        },
        {
            "city": "Walnut Creek, CA",
            "zipcode": "94596"
        },
        {
            "city": "Walnut Creek, CA",
            "zipcode": "94595"
        },
        {
            "city": "Woodacre, CA",
            "zipcode": "94973"
        }
    ];
}

