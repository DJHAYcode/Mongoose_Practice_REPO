const Student = require('../models/students');

module.exports.createStudent = async (req, res) => {
    try{
        const student = new Student ({
            studentNumber: 'S12347',
            firstName: 'Juan',
            lastName: 'Dela Cruz',
            age: 20,
            course: 'Computer Science',
            email: 'juan.delacruz@example.com'
        });
        const student2 = new Student ({
            studentNumber: 'S12348',
            firstName: 'Brody',
            lastName: 'Borniny',
            age: 22,
            course: 'Information Technology',
            email: 'brody.borniny@example.com'
        });

        await student.save();
        await student2.save();
        res.send('Student created successfully');
    } catch (err) {
        console.log(err.message);
        res.status(500).send(err.message);
    }
};

module.exports.getAllStudents = async (req, res) => {
   try{
    const students = await Student.find();
    res.json(students);
   } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
   }
};

module.exports.getStudentById = async (req, res) => {
    try{
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.json(student);
    }catch (err){
        console.log(err.message);
        res.status(500).send(err.message);
    }
};

