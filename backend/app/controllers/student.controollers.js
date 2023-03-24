const db = require('../models')
const Education = db.education

exports.findAll = (req,res) => {
    Education.find().then(data => {
        res.json(data)
    }).catch(err => { res.status(500).json({message: err.message || "connect can not to empty"})

    })
}

exports.findOne = (req,res) => {
    const id = req.params.id
    Education.findById(id).then(data => {
        if(!data){res.status(404).json({message:"Not found"})}
        else{res.json(data)}
    }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

    })
}

exports.create = (req,res) => {
    if(!req.body.educations) {
        res.status(400).json({message:"connect can not to empty"})
        return;
    }

    const education = new Education(
        {
            educations: req.body.educations,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            school: req.body.school
        }
    );

        education.save(education).then(data => {
            res.json(data)
        })
        .catch(err =>{
            res.status(500).json({message: err.message || "error!! i sus you"})
        })

}

exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).json({ message : "อับเดพไม่ได้ไอสัส!!!!"})
    }
    const id = req.params.id
    Education.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).json({
                message: `cannot update data with id=${id}`
            })
        }
        else{
            res.json({message : "เสร็จละมั้ง!!!"})
        }
    }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

})
}

exports.delete = (req,res) => {
    const id = req.params.id
    Education.findByIdAndRemove(id,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).json({
                message: `cannot remove data with id=${id}`
            })
        }
        else{
            res.json({message : "ลบดิไอสัส!!!"})
        }
    }).catch(err => { res.status(500).json({message: err.message || "ไม่ต้องเสือกหรอกไอสัส!!!"})

})
}