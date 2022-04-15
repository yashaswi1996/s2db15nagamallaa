var Olives = require('../models/Olives');

// List of all Olives
exports.Olives_list = async function (req, res) {
    // res.send('NOT IMPLEMENTED: Olives list');
    try {
        theOlivess = await Olives.find();
        res.send(theOlivess);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific Olives.
exports.Olives_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await Olives.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Olives create on POST.
exports.Olives_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Olives();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Olives_color = req.body.Olives_color;
    document.Olives_quantity = req.body.Olives_quantity;
    document.Olives_cost = req.body.Olives_cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Olives delete form on DELETE.
exports.Olives_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Olives delete DELETE ' + req.params.id);
};
// Handle Olives update form on PUT.
exports.Olives_update_put = async function (req, res) {
    //res.send('NOT IMPLEMENTED: Olives update PUT' + req.params.id);
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Olives.findById(req.params.id)
        // Do updates of properties
        if (req.body.Olives_color)
            toUpdate.Olives_color = req.body.Olives_color;
        if (req.body.Olives_quantity) toUpdate.cost = req.body.Olives_quantity;
        if (req.body.size) toUpdate.Olives_cost = req.body.Olives_cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// VIEWS
// Handle a show all view
exports.Olives_view_all_Page = async function (req, res) {
    try {
        theOlivess = await Olives.find();
        res.render('Olives', { title: 'Olives Search Results', results: theOlivess });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};