import React from 'react';
import EloTable from './EloTable';
import BasicTable from './Table';
import StickerLabel from './StickerLabel';

function NoMeetingsSection() {
    return (
        <section className="py-5">
            <div className="container-fluid">
                <h2 className="text-center">THE DATA</h2>
                <h5 className="text-center">NBA Win Data (First 10 entries)</h5>
                <div className="row">
                    <div className="col-md-12">
                        <BasicTable />
                    </div>  
                    <div className="col-md-6">
                        <StickerLabel
                        title="Important fields to consider"
                        description="NBA Wins Data Table"
                        />
                        
                        <div className="features">
                            <div className="feature">
                                <h3 className="feature-title">total_wins</h3>
                                <p className="feature-description">Total number of wins in a regular season.</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">avg_pts</h3>
                                <p className="feature-description">Average points scored in a regular season</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">avg_elo_n</h3>
                                <p className="feature-description">Average relative skill of each team in a regular season.</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">avg_pts_differential</h3>
                                <p className="feature-description">Average point differential between the team and their opponents in a regular season.</p>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="col-md-6">
                    <StickerLabel
                        title="Mathematical Significance"
                        description="What can we do with this info?"
                        />
                        <div>
                            <div style={{ fontSize: '1.3em' }}>
                                <strong>Dataset Overview:</strong><br></br>
                                <li>Historical game results data from 1995 to 2015</li>
                            </div><br></br><br></br>
                            <div style={{ fontSize: '1.3em' }}> 
                                <strong>Insights Using Correlations and Regression Models:</strong><br></br>
                                <li>Facilitates forecasting of the number of victories for future campaigns and pinpoints areas in need of improvement.</li>
                                <li>Identify trends in team performance to assists teams in formulating game-changing tactics based on the data.</li>
                            </div>
                        </div>
                    </div>    
                </div>
                <br />
                <br />
                <h5 className="text-center">NBA ELO Data (First 10 entries)</h5>
                <div className="row">
                    <div className="col-md-12">
                        <EloTable />
                    </div>
                    <br />
                    <br />
                    {/* Important data sections */}
                    <div className="col-md-6">
                        <StickerLabel
                            title="Important fields to consider"
                            description="NBA Elo Data Table"
                            />
                        <div className="features">
                            <div className="feature">
                                <h3 className="feature-title">pts</h3>
                                <p className="feature-description">Points scored by the team in a game.</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">elo_n</h3>
                                <p className="feature-description">A measure of relative skill level of the team in the league.</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">year_id</h3>
                                <p className="feature-description">Year when the team played the games.</p>
                            </div>
                            <div className="feature">
                                <h3 className="feature-title">fran_id</h3>
                                <p className="feature-description">Name of the NBA team.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <StickerLabel
                            title="Mathematical Significance"
                            description="What can we do with this info?"
                        />
                        <div>
                            <div style={{ fontSize: '1.3em' }}>
                                <strong>Dataset Overview:</strong><br></br>
                                <li>Historical game results to determine an elo rating from 1947 to 2015</li>
                            </div><br></br><br></br>
                            <div style={{ fontSize: '1.3em' }}> 
                                <strong>Insights Using Hypothesis Testing:</strong><br></br>
                                <li>Can reveal team performance over multiple seasons.</li>
                                <li>Enables identification of trends and areas for improvement.</li>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </section>
    );
}

export default NoMeetingsSection;
