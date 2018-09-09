// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
    {
        name: "jon",
        photo: "http://pixel.nymag.com/imgs/daily/vulture/2015/12/06/06-jon-stewart-arbys.w529.h529.jpg",
        scores: ["2", "3", "2"]
    },
    {
        name: "steve",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/SteveHarveyHWOFMay2013_%28cropped%29.jpg/220px-SteveHarveyHWOFMay2013_%28cropped%29.jpg",
        scores: ["4", "5", "3"]
    }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;
