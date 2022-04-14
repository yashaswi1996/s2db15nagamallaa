var Olives = require('../models/Olives');
// List of all Olives
exports.Olives_list = async function(req, res) {
    try{
    theOlives = await Olives.find();
    res.send(theOlives);
    }
    catch(err){
    res.error(500,`{"error": ${err}}`);
    res.status(500);
    }
    };
// for a specific Costume.
exports.Olives_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Olives detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.Olives_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Olives();
    document.Olives_type = req.body.Olives_type;
    document.cost = req.body.cost;
    document.size = req.body.size;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    } 
};
// Handle Costume delete form on DELETE.
exports.Olives_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Olives delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.Olives_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Olives update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.Olives_view_all_Page = async function(req, res) {
    try{
    theOlives = await Olives.find();
    res.render('Olives', { title: 'Olives Search Results', results: theOlives });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
