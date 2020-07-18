var create_error = require('http-errors');
var express = require('express');
var path = require('path');
var cookie_parser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); 



var app = express();



var mongoose = require('mongoose');


create_db_connection();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie_parser());
app.use(express.static(path.join(__dirname, 'public')));





// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────


// ADD ROUTES AND THEIR ROUTES HERE //

// START


var consumer_router             =  require('./app_server/routes/consumer'           );
var category_router             =  require('./app_server/routes/category'           );
var deliverer_router            =  require('./app_server/routes/deliverer'          );
var order_router                =  require('./app_server/routes/order'              );
var payment_router              =  require('./app_server/routes/payment'            );
var product_router              =  require('./app_server/routes/product'            );
var retailer_router             =  require('./app_server/routes/retailer'           );
var request_router              =  require('./app_server/routes/request'            );
var shoppingCart_router         =  require('./app_server/routes/shoppingCart'       );
var store_router                =  require('./app_server/routes/store'              );
var vehicle_router              =  require('./app_server/routes/vehicle'            );

app.use('/consumer'         ,   consumer_router            );
app.use('/category'         ,   category_router            );
app.use('/deliverer'         ,  deliverer_router           );
app.use('/order'         ,      order_router               );
app.use('/payment'         ,    payment_router             );
app.use('/product'         ,    product_router             );
app.use('/retailer'         ,   retailer_router            );
app.use('/request'         ,    request_router             );
app.use('/shoppingCart'     ,   shoppingCart_router        );
app.use('/store'         ,      store_router               );
app.use('/vehicle'         ,    vehicle_router             );
// END

// ADD ROUTES AND THEIR ROUTES HERE //


// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────
// ────────────────────────────────────────────────────────────────────────────────








// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(create_error(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('port', 4000);
var server=app.listen(app.get('port'),function(){
    console.log("see magic on port in function" + " "+server.address().port);
    
}); 

module.exports = app;







// DB Connection //

function create_db_connection(uri) {
  mongoose.connect("mongodb://localhost:27017/Baazar", { useNewUrlParser: "true" });

  mongoose.connection.on("error", (err) => {

    console.log("err", err);

  });

  mongoose.connection.on("connected", (err, res) => {
    console.log("mongoose is connected");
  });

}