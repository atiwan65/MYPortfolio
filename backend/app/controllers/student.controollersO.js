// const db = require('../models')
// const Student = db.students

// exports.findAll = (req,res) => {
//     Student.find().then(data => {
//         res.json(data)
//     }).catch(err => { res.status(500).json({message: err.message || "connect can not to empty"})

//     })
// }

// exports.findOne = (req,res) => {
//     const id = req.params.id
//     Student.findById(id).then(data => {
//         if(!data){res.status(404).json({message:"Not found"})}
//         else{res.json(data)}
//     }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

//     })
// }

// exports.create = (req,res) => {
//     if(!req.body.code) {
//         res.status(400).json({message:"connect can not to empty"})
//         return;
//     }

//     const student = new Student(
//         {
//             code: req.body.code,
//             firstname: req.body.firstname,
//             lastname: req.body.lastname,
//             email: req.body.email
//         }
//     );

//         student.save(student).then(data => {
//             res.json(data)
//         })
//         .catch(err =>{
//             res.status(500).json({message: err.message || "error!! i sus you"})
//         })

// }

// exports.update = (req,res) => {
//     if(!req.body){
//         return res.status(400).json({ message : "อับเดพไม่ได้ไอสัส!!!!"})
//     }
//     const id = req.params.id
//     Student.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
//     .then(data => {
//         if(!data){
//             res.status(404).json({
//                 message: `cannot update data with id=${id}`
//             })
//         }
//         else{
//             res.json({message : "เสร็จละมั้ง!!!"})
//         }
//     }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

// })
// }

// exports.delete = (req,res) => {
//     const id = req.params.id
//     Student.findByIdAndRemove(id,{useFindAndModify: false})
//     .then(data => {
//         if(!data){
//             res.status(404).json({
//                 message: `cannot remove data with id=${id}`
//             })
//         }
//         else{
//             res.json({message : "ลบดิไอสัส!!!"})
//         }
//     }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

// })
// }