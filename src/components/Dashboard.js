import { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react"; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import ChartData from "./ChartData";

const Dashboard = () => {
  const [rowData, setRowData] = useState([]);

  // Column Definitions: Defines & controls grid columns.
  const [colDefs] = useState([
    { field: "mission" },
    { field: "company" },
    { field: "location" },
    { field: "date" },
    { field: "time" },
    { field: "price" },
    { field: "successful" },
    { field: "rocket" },
  ]);

  const [chartData, setChartData] = useState({
    labels: ["Successful", "Unsuccessful"],
    datasets: [{
      data: [0, 0],
      backgroundColor: ["#4CAF50", "#FF5733"],
    }],
  });

  useEffect(() => {
    fetch("https://www.ag-grid.com/example-assets/space-mission-data.json")
      .then((result) => result.json())
      .then((rowData) => setRowData(rowData));
  }, []);
  useEffect(() => {
    // Calculate the proportion of successful missions
    const successfulMissions = rowData.filter(mission => mission.successful);
    // const unsuccessfulMissions = rowData.filter(mission => !mission.successful);

    const successPercentage = ((successfulMissions.length / rowData.length) * 100).toFixed(2);;
    const failurePercentage =(100 - successPercentage).toFixed(2);

    // Update chart data
    setChartData({
      labels: ["Successful", "Unsuccessful"],
      datasets: [{
        data: [successPercentage, failurePercentage],
        backgroundColor: ["#4CAF50", "#FF5733"],
      }],
    });
  }, [rowData]);

  const containerStyle = useMemo(() => ({ width: "100%", height: "200px" }),[]);
  const gridStyle = useMemo(() => ({ height: "250%", width: "100%" }), []);
  return (
    <>
    <div className={"ag-theme-quartz"} style={containerStyle}>
      <div style={gridStyle}>
        {/* The AG Grid component */}
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          onGridReady={(params) => console.log("Grid is ready:", params)}
          pagination={true}
        />
      </div>
    </div>   
    <ChartData data={chartData} />
    </>
  );
};

export default Dashboard;
