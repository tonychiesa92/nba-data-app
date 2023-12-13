import React from 'react';
import WinsByPtsScatterPlot from "./TotalWinsByPts";
import WinsByPtsAvgSkill from "./WinsByAvgSkill";

function SalesTrendsComponent() {
  return (
    <div className="row pt-6 gy-7 gx-6" style={{ marginBottom: '50px' }}>
      <div className="col-12 col-md-6">
        <div className="row justify-content-between mb-4">
          <div className="col-12">
            <h3>Wins by Avg Pts.</h3>  
          </div> 
        </div>
        <div
          className="echart-sales-trends"
          style={{
            height: '270px',
            width: '100%',
            userSelect: 'none',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            position: 'relative',
          }}
        >
          <WinsByPtsScatterPlot />
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="row justify-content-between mb-4">
          <div className="col-12">
            <h3>Wins by Avg ELO Rating</h3>    
          </div>
        </div>
        <div
          className="echart-call-campaign"
          style={{
            height: '290px',
            width: '100%',
            userSelect: 'none',
            WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            position: 'relative',
          }}
        >
          <WinsByPtsAvgSkill />
        </div>
      </div>
    </div>
  );
}

export default SalesTrendsComponent;
