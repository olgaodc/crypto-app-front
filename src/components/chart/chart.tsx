import { Chart as ChartJS, LineElement } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartWrapper } from './chart.styled';

ChartJS.register(
  LineElement,
  // PointElement,
)

const CryptoChart = ({ cryptoPrice, time }: { cryptoPrice: number[], time: string[] }) => {

  const data = {
    labels: time,
    datasets: [{
      label: '',
      data: cryptoPrice,
      borderWidth: 1,
      borderColor: '#1cb073',
      backgroundColor: 'rgba(28, 176, 115, 0.2)',
      // pointBorderColor: 'transparent', 
      pointStyle: false as false,
      fill: true,     
      // pointStyle: false
    }]
  }

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false
        },
        ticks: {
          callback: (value: any) => {
            if (value < 0.1) {
              return '$' + value.toFixed(8);
            } else {
              return '$' + value.toFixed(2);
            }
          },
          color: '#ffffffd9',
          font: {
            size: 14
          },
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          autoSkip: true,
          autoSkipPadding: 30,
          maxRotation: 0,
          // maxTicksLimit: 8,
          color: '#ffffffd9',
          font: {
            size: 14
          },
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          boxWidth: 0,
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let value = context.parsed.y;
            if (value < 1) {
              value = value.toFixed(8);
            } else {
              value = value.toFixed(2);
            }
            return "$" + value;
          },
        },
        displayColors: false,
        backgroundColor: '#2b2c2f',
        padding: 10,
        titleColor: '#fca311',
        bodyColor: '#fca311',
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 14
        }
      }
    }
  }

  return (
    <ChartWrapper>
      <div>
        <Line
          height={400}
          data={data}
          options={options}
        />
      </div>
    </ChartWrapper>
  )
}

export default CryptoChart