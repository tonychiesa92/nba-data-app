import { Scatter } from "react-chartjs-2";
import { useState, useEffect } from "react";
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
} from 'chart.js';

const Stats = require("statsmodels-js");


ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
const API_BASE = "http://localhost:3001";

function WinsByPtsAvgSkill() {
    const [wins, setWins] = useState([]);

    useEffect(() => {
        GetWins();

    }, [])

    const GetWins = () => {
        fetch(API_BASE + "/wins")
            .then(res => res.json())
            .then(data => setWins(data))
            .catch(err => console.error("Error: ", err));
    }

    // Convert the retrieved data to the format required by Chart.js
    const data = {
        datasets: [
            {
                label: 'Wins by Average Relative Skill',
                data: wins.map((win) => ({ x: win.avg_elo_n, y: win.total_wins })),
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Define the options for the chart
    const options = {
        type: 'scatter',
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Scatter Plots for NBA Historical Data'
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Average Relative SKill",
                }
            },
            y: {
                title: {
                    display: true,
                    text: "Total Number of Wins",
                }
            },
        },
    };

    const a = wins.map((win) => (
        Number(win.avg_elo_n, 4)
    ));

    const b = wins.map((win) => (
        Number(win.total_wins, 4)
    ));

    const result = Stats.pearsonr(a, b);
    
    // Render the Scatter component and pass in the chartData and options as props
    return (
        <>
            <Scatter data={data} options={options} />
            {Object.entries(result).map(([key, value]) => {
                return (<p>{key} : {value}</p>);
            })}
        </>
    );

}
export default WinsByPtsAvgSkill;