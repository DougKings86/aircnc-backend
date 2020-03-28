const DashboardService = require('../services/DashboardService');

module.exports = {
    async show(req , res){
        const {user_id}  = req.headers;
        const spots = await DashboardService.getSpotsById(user_id);
        return res.json(spots);
    }
}