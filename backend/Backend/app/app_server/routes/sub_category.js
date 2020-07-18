var express = require('express');
var router = express.Router();


var sub_categoryController  =   require('../controller/sub_category_controller')
//all working , login not tested yet
router.get   ('/'             ,    sub_categoryController.view_all_sub_category);

router.get   ('/:name'        ,    sub_categoryController.view_sub_category    );

router.post  ('/add'          ,    sub_categoryController.add_sub_category     );

router.put   ('/update/:id'   ,    sub_categoryController.update_sub_category  );

router.delete('/delete/:id'   ,    sub_categoryController.delete_sub_category  );

router.post  ('/login'      ,      sub_categoryController.login           );



module.exports = router;
