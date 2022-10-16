const fs = require('fs');
const notes = require ('../Develop/db/db.json')
const router = require('express').Router();
const uniqueId = require('uniqid');

router.get('/api/notes', (req,res)=>{
    fs.readFile('../develop/db/db.json', (err,data)=>{
        err?err : console.log(JSON.parse(data));
        res.send(data)
    })
});

router.post('/api/notes', (req,res) =>{
    let newNote= {
        id: uniqueId(),
        title: req.body.title,
        text: req.body.text
    }
    fs.readFile('../Develop/db/db.json', (err,data)=>{
        if (err)throw err;

        let parsedData = JSON.parse(data);
        parsedData.push(newNote);
        console.log(parsedData);

        fs.writeFile('../Develop/db/db.json', JSON.stringify(parsedData), (err)=>{
            err?console.log(err): res.send ('note created'
            )
        })
    })
}
)
module.exports= router;