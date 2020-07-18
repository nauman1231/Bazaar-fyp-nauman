var deliverer_schema = require('../models/deliverer_model')

var deliverer_controller = {

    add_deliverer: (req, res) => {

        var deliverer = new deliverer_schema(req.body);

        deliverer.save((err) => {
            if (err) {
                       res.status(500)
                       res.send("Failed to add"+err);
                     }

            else     {
                       res.status(200);
                       res.end("Successfully added");
                     }

        });

    },

    update_deliverer: (req, res, next) => {

        deliverer_schema.findOneAndUpdate({'phoneNumber':req.params.phoneNumber},req.body,{ new: true },(err, todo) => {
            
                if (err)   { 
                            res.status(500);
                            res.end("Failed to Update");
                           }

                if (!todo) {
                            res.status(404)
                            res.end("deliverer does not exist")
                           }

                else       {
                            res.status(200);
                            res.json(todo);
                            res.end()
                           }


            })


    },

    delete_deliverer: (req, res, next) => {

        deliverer_schema.findByIdAndRemove(req.params.id,(err,doc)=>{

            if(err)    {
                        res.status(500);
                        res.end("Failed to Delete");
                       } 

            if (!doc)  {
                        res.status(404);
                        res.end("deliverer does not exist");
                       } 

            else       {
                        res.status(200);
                        res.end("Successfully deleted");
                       }

        })

    },

    view_deliverer: (req, res) => {

        deliverer_schema.findOne({ 'phoneNumber': req.params.phoneNumber }, function (err, doc) {
            
            if (err)  {
                       res.status("500");
                       res.end("failed to view");
                      }

            if (!doc) { 
                       res.status(404); 
                       res.send("No deliverer exist"); 
                      }

            else      {
                       res.status(200); 
                       res.json(doc);
                      }
        });


    },

    view_all_deliverer: (req, res, next) => {

       
        deliverer_schema.find({}, (err, doc) => {

            if (err)   {
                        res.status(500);
                        res.end("Failed to get deliverers");
                       } 
           
            if (!doc)  {
                        res.status(404);
                        res.end("No deliverer exist");
                       }
           
            else       {
                        res.status(200);
                        res.json(doc);
                       }

        })
    
    },

    login: (req, res, next) => {

        deliverer_schema.findOne({ 'email': req.body.email, 'password': req.body.password }, function (err, result) {

            if (err)     {
                            res.status(500);
                            res.end("");
                          }

            if (!result)  {
                              res.status(404);
                              res.send("deliverer does not exist");
                          }

            else            {
                              res.status(200);
                              res.send("deliverer exist");
                            }

        });

    }

    

}

module.exports = deliverer_controller