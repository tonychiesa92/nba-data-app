import Table from 'react-bootstrap/Table';
import { useState, useEffect } from "react";

const API_BASE = "http://localhost:3001";

function BasicTable() {
    const [wins, setWins] = useState([]);

    useEffect(() => {
        GetWins();
        //console.log(wins);
    }, [wins])

    const GetWins = () => {
        fetch(API_BASE + "/wins")
            .then(res => res.json())
            .then(data => setWins(data))
            .catch(err => console.error("Error: ", err));
    }

    return (
        <Table striped bordered>
          <thead>
            <tr>
              <th>year_id</th>
              <th>fran_id</th>
              <th>avg_pts</th>
              <th>avg_opp_pts</th>
              <th>avg_elo_n</th>
              <th>avg_opp_elo_n</th>
              <th>avg_pts_differential</th>
              <th>avg_elo_differential</th>
              <th>total_wins</th>
            </tr>
          </thead>
          <tbody>
            {wins.slice(0, 10).map((win) => (
              <tr key={win._id}>
                <td>{win.year_id}</td>
                <td>{win.fran_id}</td>
                <td>{win.avg_pts}</td>
                <td>{win.avg_opp_pts}</td>
                <td>{win.avg_elo_n}</td>
                <td>{win.avg_opp_elo_n}</td>
                <td>{win.avg_pts_differential}</td>
                <td>{win.avg_elo_differential}</td>
                <td>{win.total_wins}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      );
}

export default BasicTable;