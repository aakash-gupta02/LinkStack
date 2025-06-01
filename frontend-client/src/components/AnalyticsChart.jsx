import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);



const AnalyticsChart = ({ links }) => {
  const labels = links.map((link) => link.title || "Untitled");
  const clicks = links.map((link) => link.clicks);

  const data = {
    labels,
    datasets: [
      {
        label: 'Link Clicks',
        data: clicks,
        backgroundColor: 'rgba(99, 102, 241, 0.7)', // Indigo
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Link Clicks Overview',
        font: {
          size: 18,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Bar options={options} data={data} />;
};

export default AnalyticsChart