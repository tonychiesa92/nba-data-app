import React from 'react';

function HeroSection() {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="display-4 fw-bold text-body-emphasis">NBA Historical Data Analysis & Visualization </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">A data visualization project using hypothesis testing and linear and multiple regression.</p>
        
      </div>
      <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
        <div className="container px-5">
          <img
            src="./assets/images/nba-data-viz.jpg"
            className="img-fluid border rounded-3 shadow-lg mb-4"
            alt="NBA-data-viz"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
