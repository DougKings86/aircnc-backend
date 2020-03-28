const spotService = require('../services/SpotService');

class SpotController {

    async index(req ,res){
        const {tech} = req.query;
        const spots = await spotService.getSpots( tech );
        return res.json(spots);
    }

    async store(req ,res ){
        const { company , price , techs } = req.body;
        const { filename }  = req.file
        const { user_id } = req.headers;
        const spot = await spotService.saveSpot({ company , price , techs , filename , user_id });
        return res.json(spot);
    }
}

module.exports = new SpotController();