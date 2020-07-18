var express = require('express');
var router = express.Router();


var paymentController  =   require('../controller/payment_controller')

router.get   ('/'             ,    paymentController.view_all_payment);

router.get   ('/:name'        ,    paymentController.view_payment    ); //peding

router.post  ('/add'          ,    paymentController.add_payment     );

router.put   ('/update/:id'   ,    paymentController.update_payment  );

router.delete('/delete/:id'   ,    paymentController.delete_payment  );

router.post  ('/login'      ,      paymentController.login           );



module.exports = router;
