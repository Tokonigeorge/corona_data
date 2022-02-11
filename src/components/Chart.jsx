import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector } from "react-redux";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  BarController,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const data = useSelector((state) => state.data);
  const _data = data?.data?.data;
  const caseArray = [
    _data?.totalSamplesTested,
    _data?.totalConfirmedCases,
    _data?.totalActiveCases,
    _data?.discharged,
    _data?.death,
  ];
  //remove all comma from text
  const [cases, setCases] = useState(
    caseArray?.map((i) => i.toString().replace(/,/g, ""))
  );

  const labels = [
    "Samples Tested",
    "Confirmed Cases",
    "Active Cases",
    "Discharged",
    "Deaths",
  ];

  return (
    <div className="md:w-w100 my-16">
      <p className="font-bold text-purple-700 text-2xl">Statistics</p>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "",
              data: cases,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ],
              borderColor: [
                "rgba(255,99,132,1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
              ],
              borderWidth: 0.5,
            },
          ],
          options: {
            aspectRatio: 1,
          },
        }}
      />
    </div>
  );
};

export default BarChart;
