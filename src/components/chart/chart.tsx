import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const CryptoChart = ({ cryptoData, timestamps } : { cryptoData: number[], timestamps: string[] }) => {
    const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current?.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
            type: 'line',
            data: {
              labels: timestamps,
              datasets: [
                {
                  label: 'Price',
                  data: cryptoData,
                  borderColor: 'rgb(75, 192, 192)',
                  borderWidth: 2,
                },
              ],
            },
            options: {
              scales: {
                x: {
                  type: 'time',
                  time: {
                    unit: 'minute',
                  },
                },
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
      }
    }
  }, [cryptoData, timestamps]);

  return (
    <div>
      <h2>Cryptocurrency chart</h2>
      <canvas ref={chartRef} />
    </div>
  );
};

export default CryptoChart;
