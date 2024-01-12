import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartData = ({ data }) => {
  return (
    <div style={{ width: "40%", margin: "20px auto", marginTop:"400px" }}>
      <Doughnut data={data} />
    </div>
  );
};

export default ChartData;
