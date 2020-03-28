const BookingService = require("../services/BookingService");

class BookingController {
   
   async store(req, res){
      const { user_id } = req.headers ;
      const { spot_id } = req.params;
      const { date } = req.body;
      const booking = BookingService.saveBooking({ user_id , spot_id , date });

      return res.json(booking);      
   }

}
module.exports = new BookingController();