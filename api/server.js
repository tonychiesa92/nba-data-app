const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/nba-stats", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to db"))
    .catch(console.error);


// using Skills model to find all the NBA elo data
const Skills = require('./models/Skills');

// get route for skill
app.get('/skills', async (req, res) => {
    const skills = await Skills.find();

    res.json(skills);
});

// using Wins model to find all the NBA wins data
const Wins = require('./models/Wins');

// get route for wins
app.get('/wins', async (req, res) => {
    const wins = await Wins.find();

    res.json(wins);
});



// post route example
app.post('/win/new', (req, res) => {
    const win = new Wins({
        year_id: req.body.year_id
    });

    win.save();

    res.json(win);
});

// delete route example
app.delete('/win/delete/:id', async (req, res) => {
    const result = await Wins.findByIdAndDelete(req.params.id);

    res.json(result);
});

// put route example for a Todo list.
app.put('/win/complete/:id', async (req, res) => {
    const win = await Wins.findById(req.params.id);

    win.complete = !win.complete;

    win.save();

    res.json(win);
});

app.listen(3001, () => console.log("Server started on port 3001"));