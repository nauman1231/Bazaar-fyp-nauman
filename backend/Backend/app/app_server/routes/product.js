var express = require('express');
var router = express.Router();


var productController  =   require('../controller/product_controller')

router.get   ('/'             ,    productController.view_all_product);

router.get   ('/:name'        ,    productController.view_product    );

router.post  ('/add'          ,    productController.add_product     );

router.put   ('/update/:id'   ,    productController.update_product  );

router.delete('/delete/:name' ,    productController.delete_product  );



module.exports = router;
