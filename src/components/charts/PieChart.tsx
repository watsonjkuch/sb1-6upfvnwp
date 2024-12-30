import React, { useEffect, useRef } from 'react';
import { Pie } from 'react-chartjs-2';
import { ChartOptions } from 'chart.js';
import './ChartConfig';

interface PieChartProps {
  title: string;
  data: {
    labels: string[];
    values: number[];
    colors: {
      background: string[];
      border: string[];
    };
  };
}

export function PieChart({ title, data }: PieChartProps) {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    // Cleanup function to destroy chart instance
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors.background,
        borderColor: data.colors.border,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: title,
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="h-64">
        <Pie 
          ref={chartRef}
          data={chartData} 
          options={options}
          key={title} // Add key to force re-render with new data
        />
      </div>
    </div>
  );
}