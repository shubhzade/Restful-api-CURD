const express = require("express");
const router = express.Router();
const Sceemaa = require("../model/alien");



router.get("/", async (req, res) => {
  try {
    const aliens = await Sceemaa.find();
    res.json(aliens);
  } catch (err) {
    res.send(`Erroroops ${err}`);
  }
  // res.send('Get Request')
});



router.get("/:id", async (req, res) => {
  try {
    const alien = await Sceemaa.findById(req.params.id);
    res.json(alien);
  } catch (err) {
    res.send(`Erroroops ${err}`);
  }
  // res.send('Get Request')
});




router.post("/", async (req, res) => {
  const alien = new Sceemaa({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub,
  });
  try {
    const a1 = await alien.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});



router.patch('/:id',async(req,res)=>{
    try{
        const alien =await Sceemaa.findById(req.params.id)
        alien.sub=req.body.sub
        const a1 =await alien.save()
        res.json(a1)

    }catch(err){
        res.send('ooooooopssss')
    }
})



router.patch('/:id',async(req,res)=>{
    try{
        const alien =await Sceemaa.remove(req.params.id)
        alien.sub=req.body.sub
        const a1 =await alien.save()
        res.json(a1)

    }catch(err){
        res.send('ooooooopssss')
    }
})


module.exports = router;

// M - Model       -SCHEMA                (deta based object----were we store data)
// V - View        -UI
// C - Controller  -Roter               ()
