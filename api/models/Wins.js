const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WinsSchema = new Schema ({
    year_id: {
        type: String,
        required: true
    },
    fran_id: {
        type: String,
        required: true
    },
    avg_pts:{
        type: String,
        required: true
    },
    avg_opp_pts:{
        type: String,
        required: true
    },
    avg_elo_n:{
        type: String,
        required: true
    },
    avg_oop_elo_n:{
        type: String,
        required: true
    },
    avg_pts_differential:{
        type: String,
        required: true
    },
    avg_elo_differential:{
        type: String,
        required: true
    },
    total_wins:{
        type: String,
        required: true
    }
})

const Wins = mongoose.model("Wins", WinsSchema);

module.exports = Wins;