var express = require('express');
var router = express.Router();
var multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, 'public/uploads/')
    },
    filename: (req, file, callBack) => {
        callBack(null, file.originalname)
    }
})
var upload = multer({ storage: storage })




var delivererController = require('../controller/deliverer_controller')

router.get('/', delivererController.view_all_deliverer);

router.get('/:phoneNumber', delivererController.view_deliverer);

router.post('/add', delivererController.add_deliverer);

router.put('/update/:phoneNumber', delivererController.update_deliverer);

router.delete('/delete/:id', delivererController.delete_deliverer);

router.post('/login', delivererController.login);

router.post('/saveImage', upload.single('profilePic'));



module.exports = router;
