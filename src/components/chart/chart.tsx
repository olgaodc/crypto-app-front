import { Chart as ChartJS, LineElement } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { ChartWrapper } from './chart.styled';

ChartJS.register(
  LineElement,
  // PointElement,
)

const CryptoChart = ({ cryptoPrice, time, cryptoName, cryptoSymbol }: { cryptoPrice: number[], time: string[], cryptoName: string, cryptoSymbol: string }) => {

  const data = {
    labels: time,
    datasets: [{
      label: '',
      data: cryptoPrice,
      borderWidth: 1,
      // borderColor: '#1cb073',
      borderColor: '#AD7ED6',
      backgroundColor: '#ad7ed620',
      // pointBorderColor: 'transparent', 
      pointStyle: false as false,
      fill: true,     
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
          maxTicksLimit: 8,
          autoSkip: true,
          autoSkipPadding: 20,
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
        backgroundColor: '#17072bd4',
        padding: 10,
        titleColor: '#ffffffd9',
        bodyColor: '#ffffffd9',
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
      <h1 className='cryptoName'>{cryptoName} ({cryptoSymbol})</h1>
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