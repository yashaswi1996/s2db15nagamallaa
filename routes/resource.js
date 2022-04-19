var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var Olives_controller = require('../controllers/Olives');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Handbag ROUTES ///
// POST request for creating a Handbag.
router.post('/Olives', Olives_controller.Olives_create_post);
// DELETE request to delete Handbag.
router.delete('/Olives/:id', Olives_controller.Olives_delete);

// PUT request to update Handbag.
router.put('/Olives/:id', Olives_controller.Olives_update_put);
// GET request for one Handbag.
router.get('/Olives/:id', Olives_controller.Olives_detail);
// GET request for list of all Handbag.
router.get('/Olives', Olives_controller.Olives_list);

router.get('/detail', Olives_controller.Olives_view_one_Page);

module.exports = router;