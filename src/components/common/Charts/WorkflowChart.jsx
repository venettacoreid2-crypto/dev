// src/components/common/Charts/WorkflowChart.jsx
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const WorkflowChart = () => {
  const data = {
    labels: ['Pending', 'In Progress', 'Review', 'Completed'],
    datasets: [{
      data: [12, 8, 5, 20],
      backgroundColor: ['#ffc107', '#17a2b8', '#28a745', '#007bff'],
      borderWidth: 1
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <div className="chart-container" style={{ height: '300px' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default WorkflowChart;