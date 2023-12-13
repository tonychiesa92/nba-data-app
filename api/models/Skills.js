const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SkillsSchema = new Schema ({
    gameorder: {
        type: String,
        required: true
    },
    game_id: {
        type: String,
        required: true
    },
    lg_id:{
        type: String,
        required: true
    },
    iscopy:{
        type: String,
        required: true
    },
    year_id:{
        type: String,
        required: true
    },
    date_game:{
        type: String,
        required: true
    },
    seasonegame:{
        type: String,
        required: true
    },
    is_playoffs:{
        type: String,
        required: true
    },
    team_id:{
        type: String,
        required: true
    },
    fran_id:{
        type: String,
        required: true
    },
    pts:{
        type: String,
        required: true
    },
    elo_i:{
        type: String,
        required: true
    },
    elo_n:{
        type: String,
        required: true
    },
    win_equiv:{
        type: String,
        required: true
    },
    opp_id:{
        type: String,
        required: true
    },
    opp_fran:{
        type: String,
        required: true
    },
    opp_pts:{
        type: String,
        required: true
    },
    opp_elo_i:{
        type: String,
        required: true
    },
    opp_elo_n:{
        type: String,
        required: true
    },
    game_location:{
        type: String,
        required: true
    },
    game_result:{
        type: String,
        required: true
    },
    forecast:{
        type: String,
        required: true
    },
    notes:{
        type: String,
        required: true
    }
})

const Skills = mongoose.model("Skills", SkillsSchema);

module.exports = Skills;