const express = require('express')
const router = express.Router()
const toDoController =   require('../controllers/todo.controller');
// Retrieve all employees
router.get('/', toDoController.findAll);
// Create a new employee
router.post('/', toDoController.create);
// Retrieve a single employee with id
router.get('/:id', toDoController.findById);
// Update a employee with id
router.put('/:id', toDoController.update);
// Delete a employee with id
router.delete('/:id', toDoController.delete);
module.exports = router