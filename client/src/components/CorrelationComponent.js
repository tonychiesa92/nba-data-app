// CorrelationComponent.js

import React from 'react';
import { Stack, Row, Col } from 'react-bootstrap';

const CorrelationComponent = () => {
  const colStyle = {
    border: '1px solid #ddd',
    padding: '10px',
    marginBottom: '20px',
  };

  return (
    <Stack gap={3}>
      <Row>
        <Row>
          <Col>
            <h1>NBA Scatterplot and Correlation Data</h1>
          </Col>
        </Row>
        <i>
          *** The 'r' value represents the Pearson correlation coefficient. Additionally, both pVaules should be rounded to 0.0 for discussion purposes. ***
        </i>
        <Col lg={6} style={colStyle}>
          <p>
            The scatterplot illustrates that the data points are distributed in increasing order, meaning that as the average points increase, the total number of wins also tends to increase. This indicates a positive relationship between the two variables. The Pearson correlation coefficient of 0.4777 indicates that 47.77% of the time, there is a tendency for the total number of wins to increase (or decrease) as the average points scored value increases (or decreases). However, the p-value of 0.0 is less than the significance level of 0.01 (1%), leading us to reject the null hypothesis. Therefore, we can conclude that there is indeed a correlation between the average points scored and the total number of wins.
          </p>
        </Col>
        <Col lg={6} style={colStyle}>
          <p>
            Based on the data analysis, we can confidently state that there is a strong positive linear relationship between the total number of wins and the average relative skill. This is supported by the Pearson correlation coefficient of 0.9072, which is very close to 1, indicating a high degree of correlation. Looking at the scatterplot, we can see a clear pattern where an increase in the total number of wins is associated with an increase in the average relative skill. Moreover, the p-value of 0.0 compared to a significance level of 1% indicates that we can reject the null hypothesis (Ho) as the p-value is less than α. In simple terms, this means that the correlation coefficient is statistically significant and not just a chance occurrence. Therefore, we can confidently conclude that the total number of wins and the average relative skill are strongly and significantly related.
          </p>
        </Col>
      </Row>
    </Stack>
  );
};

export default CorrelationComponent;
