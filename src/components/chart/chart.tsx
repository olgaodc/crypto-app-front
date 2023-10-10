import { Chart as ChartJS, LineElement } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import * as S from './chart.styled';

ChartJS.register(
  LineElement,
)

const CryptoChart = ({ cryptoPrice, time, cryptoName, cryptoSymbol }: { cryptoPrice: number[], time: string[], cryptoName: string, cryptoSymbol: string }) => {

  const data = {
    labels: time,
    datasets: [{
      label: '',
      data: cryptoPrice,
      borderWidth: 1,
      borderColor: '#AD7ED6',
      backgroundColor: '#ad7ed620',
      pointStyle: false as false,
      fill: true,
    }]
  }

  const desktopOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          labelOffset: -5,
          callback: (value: any) => {
            if (value === 0.00000000) {
              return '$' + value.toFixed(0);
            } else if (value < 0.1) {
              return '$' + value.toFixed(8);
            } else {
              return '$' + value.toFixed(2);
            }
          },
          color: '#ffffffd9',
          font: {
            size: 14
          },
          maxTicksLimit: 7,
          autoSkip: true,
          autoSkipPadding: 20,
        }
      },
      x: {
        border: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: true,
          autoSkip: true,
          autoSkipPadding: 40,
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
          label: function (context: any) {
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
      },
    },
  }

  const mobileOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          labelOffset: -10,
          mirror: true,
          callback: (value: any) => {
            if (value === 0.00000000) {
              return '$' + value.toFixed(0);
            } else if (value < 0.1) {
              return '$' + value.toFixed(8);
            } else {
              return '$' + value.toFixed(2);
            }
          },
          color: '#ffffffd9',
          font: {
            size: 14
          },
          maxTicksLimit: 7,
          autoSkip: true,
          autoSkipPadding: 20,
        }
      },
      x: {
        border: {
          display: false
        },
        grid: {
          display: false
        },
        ticks: {
          display: false
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
          label: function (context: any) {
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
      },
    },
  }

  return (
    <S.ChartWrapper>
      <S.DesktopChart>
        <h3 className='cryptoName'>{cryptoName} ({cryptoSymbol})</h3>
        <Line
          height={400}
          data={data}
          options={desktopOptions}
        />
      </S.DesktopChart>

      <S.MobileChart >
        <h3 className='cryptoName'>{cryptoName} ({cryptoSymbol})</h3>
        <Line
          height={400}
          data={data}
          options={mobileOptions}
        />
        </S.MobileChart>  
    </S.ChartWrapper>
  )
}

export default CryptoChart