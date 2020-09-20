const orm = require('../config/orm.js');

const burger = {
    all: function (cb) {
        orm.all("burgers", function (res) {
            console.log("All results from burgers table: ", res);
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        // INSERT INTO burgers VALUES ?
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // UPDATE burgers SET columns WHERE condition
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger; 