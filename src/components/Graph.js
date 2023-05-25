import React, { useEffect, useRef } from 'react';
import { CategoryScale, Chart, LinearScale, PointElement } from 'chart.js';
import '../styles/Graph.scss'
import { LineController, LineElement } from 'chart.js';



Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement)
function Graph() {
  const chartRef = useRef(null);

  useEffect(() => {
    let chartInstance = null;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (chartInstance) {
        chartInstance.destroy();
      }
      // Gradient 및 기타 설정 코드
      // ...
      var gradientStroke = ctx.createLinearGradient(500, 0, 100, 0);
      gradientStroke.addColorStop(0, "#05EAC1");
      gradientStroke.addColorStop(1, "#00FF57");

      var gradientBkgrd = ctx.createLinearGradient(0, 100, 0, 400);
      gradientBkgrd.addColorStop(0, "rgba(244,94,132,1)");
      gradientBkgrd.addColorStop(1, "rgba(249,135,94,1)");

      //데이터정의
      const data1 = [2000, 5000, 7000, 6000, 10000, 9000, 12000, 11000, 14000];
      const data2 = [null, null, null, null, null, null, null, null, 14000, 13000, 18000, 20000];
      // 차트 설정 및 생성 코드
      // ...

      class CustomLineController extends LineController {
        draw() {
          const meta = this.getMeta();
          const points = meta.data || [];
          const area = this.chart.chartArea;
          const ctx = this.chart.ctx;
          const aliasPixel = (value) => (value % 2 === 0 ? value : value + 1);
      
          ctx.save();
      
          //ctx.shadowColor = 'rgba(244,94,132,0.8)';
          ctx.shadowBlur = 8;
          ctx.shadowOffsetX = 0;
          ctx.shadowOffsetY = 6;
      

          ctx.restore();
      
          super.draw();
        }
      }
      
      // Register the custom controller
      Chart.register(CustomLineController);

      chartInstance= new Chart(ctx, {
        // 차트 설정 및 데이터
        // ...
        type:  CustomLineController.id,

        // The data for our dataset
        data: {
            labels: ["HTML", "", "CSS", "", "JS", "", "REACT", "", "NEXT", "","","FUTURE"],
            datasets: [
              {
                label: "Income",
                backgroundColor: gradientBkgrd,
                borderColor: gradientStroke,
                data: data1,
                borderDash: [],
                pointBorderColor: "rgba(255,255,255,0)",
                pointBackgroundColor: "rgba(255,255,255,0)",
                pointBorderWidth: 0,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: gradientStroke,
                pointHoverBorderColor: "rgba(255,255,255,1)",
                pointHoverBorderWidth: 4,
                pointRadius: 1,
                borderWidth: 5,
                pointHitRadius: 16,
             },
             {
              label: "Income",
              backgroundColor: gradientBkgrd,
              borderColor: gradientStroke,
              data: data2,
              borderDash: [5, 5],
              pointBorderColor: "rgba(255,255,255,0)",
              pointBackgroundColor: "rgba(255,255,255,0)",
              pointBorderWidth: 0,
              pointHoverRadius: 8,
              pointHoverBackgroundColor: gradientStroke,
              pointHoverBorderColor: "rgba(255,255,255,1)",
              pointHoverBorderWidth: 4,
              pointRadius: 1,
              borderWidth: 5,
              pointHitRadius: 16,
           }
            ]
        },
    
        // Configuration options go here
        options: {
          tooltips: {
            backgroundColor:'#fff',
            displayColors:false,
               titleFontColor: '#000',
            bodyFontColor: '#000'
            
            },      
          legend: {
                display: false
          },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }],
                yAxes: [{

                  gridLines: {
                    display: true
                },
                ticks: {
                    display: true,
                    fontColor: 'red',
                    callback: function(value, index, values) {
                      return (value / 1000) + 'K';
                    }
                }               
               }],
            }
        }
        
      });
    }
    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);
  

  return (

      <div className="chart__container">
        <canvas id="chart" ref={chartRef}></canvas>
      </div>

  );
}

export default Graph;
