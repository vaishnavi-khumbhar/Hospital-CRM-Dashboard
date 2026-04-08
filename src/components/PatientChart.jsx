import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

function PatientChart() {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Patients Growth",
        data: [20, 40, 35, 60, 80, 100],
        borderColor: "#6366f1",
        backgroundColor: "#c7d2fe",
        tension: 0.4,
      },
    ],
  };

  return <Line data={data} />;
}

export default PatientChart;