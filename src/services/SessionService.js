const User = require('../models/User');

class SessionService {

    async createUser(email){
        let user = await User.findOne({ email });
        if(! user ){
            user = await User.create({email}); 
        }
        return user;
    }
}

module.exports = new SessionService();