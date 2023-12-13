import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

function EloTable() {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        GetSkills();
        //console.log(skills);
    }, [skills])

    const GetSkills = () => {
        fetch(API_BASE + "/skills")
            .then(res => res.json())
            .then(data => setSkills(data))
            .catch(err => console.error("Error: ", err));
    }

    return (

        <Table responsive striped bordered size="sm">
            <thead>
                <tr>
                    <th>gameorder</th>
                    <th>game_id</th>
                    <th>lg_id</th>
                    <th>_iscopy</th>
                    <th>year_id</th>
                    <th>date_game</th>
                    <th>seasongame</th>
                    <th>is_playoffs</th>
                    <th>team_id</th>
                    <th>fran_id</th>
                    <th>pts</th>
                    <th>elo_i</th>
                    <th>elo_n</th>
                    <th>win_equiv</th>
                    <th>opp_id</th>
                    <th>opp_fran</th>
                    <th>opp_pts</th>
                    <th>opp_elo_i</th>
                    <th>opp_elo_n</th>
                    <th>game_location</th>
                    <th>game_result</th>
                    <th>forecast</th>
                    <th>notes</th>
                </tr>
            </thead>
            <tbody>
                {skills.slice(0, 10).map((skill) => (
                    <tr key={skill._id}>
                        <td>{skill.gameorder}</td>
                        <td>{skill.game_id}</td>
                        <td>{skill.lg_id}</td>
                        <td>{skill._iscopy}</td>
                        <td>{skill.year_id}</td>
                        <td>{skill.date_game}</td>
                        <td>{skill.seasongame}</td>
                        <td>{skill.is_playoffs}</td>
                        <td>{skill.team_id}</td>
                        <td>{skill.fran_id}</td>
                        <td>{skill.pts}</td>
                        <td>{skill.elo_i}</td>
                        <td>{skill.elo_n}</td>
                        <td>{skill.win_equiv}</td>
                        <td>{skill.opp_id}</td>
                        <td>{skill.opp_fran}</td>
                        <td>{skill.opp_pts}</td>
                        <td>{skill.opp_elo_i}</td>
                        <td>{skill.opp_elo_n}</td>
                        <td>{skill.game_location}</td>
                        <td>{skill.game_result}</td>
                        <td>{skill.forecast}</td>
                        <td>{skill.notes}</td>

                    </tr>
                ))}
            </tbody>
        </Table>
    );
}


export default EloTable;