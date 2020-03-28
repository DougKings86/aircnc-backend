const Spots = require('../models/Spot');

class DashboardService  {
    async getSpotsById( user_id ) {
        const spots = await Spots.find({ user : user_id});
        return spots;
    }
}

module.exports = new DashboardService();
