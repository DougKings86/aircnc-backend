const User = require('../models/User');
const Spot = require('../models/Spot');

module.exports= {
    async index(req ,res){
        const {tech} = req.query;

        const spots = await Spot.find({
            techs : tech
        });

        return res.json(spots);

    } ,
    async store(req ,res ){
        const {company , price , techs } = req.body;
        const {filename}  = req.file
        const {user_id} = req.headers;
        let user = null;

        try  {
             user = await User.findById(user_id);
        } catch ( exc ){
            return res.status(500).json({
                error : "Server Error"
            });
        }
    
        if(!user){
            return res.status(400).json({
                error : "User does not exists"
            });
        }

        const spot = await Spot.create({
            user : user_id ,
            thumbnail : filename ,
            company ,
            techs : techs.split(',').map((tech) => tech.trim()),
            price
        });
         return res.json(spot);
    }
}