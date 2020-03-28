const User = require('../models/User');
const Spot = require('../models/Spot');


class SpotService {
    
    async getSpots(tech){
        const spots = await Spot.find({
            techs : tech
        });
        return spots;
    }

    async saveSpot({ company , price , techs , filename , user_id   }){
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
       return spot;
    }
}

module.exports = new SpotService();