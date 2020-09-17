const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            console.log("All db results from burgers: ", res);
            cb(res);
        });
    } 
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger; 