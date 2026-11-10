var express = require('express');
var router = express.Router();
const studentsController = require('../controllers/studentsController');

router.get('/', studentsController.getAllStudents);

router.get('/create', studentsController.createStudent);

router.get('/:id', studentsController.getStudentById);

module.exports = router;