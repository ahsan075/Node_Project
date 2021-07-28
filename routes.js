const { userHandle } = require("./handlers/routeHandler/userHandler");
const { sampleHandle } = require("./handlers/routeHandler/sampleHandler");

const routes = {
    sample: sampleHandle,
    user: userHandle,
};

module.exports = routes;
