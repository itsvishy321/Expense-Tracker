import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    // Here we are creating an array of all the values stored in the dataPoints
    const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

    // storing the maximum element among all the values stored above
    const totalMaximum = Math.max(...dataPointValues);
    
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value} 
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
