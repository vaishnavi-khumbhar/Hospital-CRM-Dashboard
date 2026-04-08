import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

function AppointmentChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Appointments",
        data: [5, 8, 6, 10, 7, 12],
        backgroundColor: "#06b6d4",
      },
    ],
  };

  return <Bar data={data} />;
}

export default AppointmentChart;