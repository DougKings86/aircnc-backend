const SessionService =  require('../services/SessionService');

class SessionController  {
 async store(req ,res){
     const { email } = req.body;
     const user = SessionService.createUser(email);
     return res.json(user);
 }
}

module.exports = new SessionController();