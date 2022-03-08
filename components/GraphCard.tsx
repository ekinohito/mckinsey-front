import Chart from 'chart.js/auto';
import { useEffect, useRef } from "react"

function colorOfRating(rating?: number | string) {
    if (!rating) return 'no'
    if (typeof rating === "string") return "no"
    switch (true) {
        case rating >= 6.67:
            return 'green'
        case rating >= 3.34:
            return 'yellow'
        case rating >= 0:
            return 'red'
        default:
            return 'no'
    }
}

export default function GraphCard({ rating, data }: { rating?: number | string, data: number[] }) {
    const ratings = {
        red: <span className="text-red-200">{rating}</span>,
        yellow: <span className="text-yellow-200">{rating}</span>,
        green: <span className="text-green-200">{rating}</span>,
        no: <span className="text-gray-200">{rating}</span>,
    }
    const colors = {
        red: '#fecaca',
        yellow: '#fef08a',
        green: '#bbf7d0',
        no: '#ffffff'
    }
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        const ctx = canvasRef.current
        if (ctx == null) return
        const graphData = {
            labels: [
              'Eating',
              'Drinking',
              'Sleeping',
              'Designing',
              'Coding',
            ],
            datasets: [{
              label: '',
              data: data.map(p => p + 5),
              fill: true,
              backgroundColor: `${colors[color]}20`,
              borderColor: colors[color],
              pointBackgroundColor: colors[color],
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgb(255, 99, 132)',
            }]
          };
        const chart = new Chart(ctx, {
            type: 'radar',
            data: graphData,
            options: {
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                scales: {
                    r: {
                        min: 0,
                        max: 16,
                        grid: {
                            color: "#ffffff",
                        },
                        ticks: {
                            display: false,
                            stepSize: 2,
                        }
                    }
                },
                elements: {
                    line: {
                        borderWidth: 3,
                        tension: 0.5,
                    }
                }
            },
        })
        return () => chart.destroy()
    }, [canvasRef])

    const color = colorOfRating(rating)
    return (
        <div className="p-3 bg-[#011631] text-white relative">
            <div className="text-6xl absolute inset-0 flex justify-center items-center">
                <div>{ratings[color]}</div></div>
            <canvas ref={canvasRef} className="max-h-64"/>
        </div>
    )
}