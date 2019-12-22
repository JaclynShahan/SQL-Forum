const express = require('express');
const router = express.Router(); // router extends express functionality
// a router is a file that allows you to extend Node express functionality
// this allows you to keep your code cleaner in your main index.js file
// router has basically all th same functionality as your variable "app" has

// so below, router.get is basically an app.get
router.get("/", (req, res) => { // this is just a catch-all for all endpoints
    res.send({response: "I am running"})
});

module.exports = (io) => {
    // now this file can handle express requests, and emit "IO" events

    return router
};