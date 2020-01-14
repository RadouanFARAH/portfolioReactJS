import React, { Component } from 'react'
import Chart from 'chart.js';
import './Skills.css'

Chart.defaults.global.defaultFontColor = 'black';
Chart.defaults.global.defaultStrokeColor = 'black';



   





export class Skills extends Component {


     componentDidMount() {
         Chart.defaults.global.defaultFontFamily = "comfortaa";
    
    
      //coding chart
      var ctx = document.getElementById("codingChart");
      new Chart(ctx, {
        type: 'radar',
        


        data: {

          labels: ["Vue.js", "Html", "Css", "Sass", "Bootstrap" ,["JavaScript", "      ES6"], "React.js", "Angular 6","Node.js","Express.js","MongoDB","Php","Sql","Wordpress","APIs",["Web   ","Sockets"],"Git", "C", "Java", "Linux"],
          datasets: [{
            data: [4.5, 4.9, 4.9, 4.5, 4.9, 4.9, 4, 4, 4, 4, 4, 4, 3.5,4,3.5,3.5,4,4,4.5,4],
             
             
            backgroundColor: [
            'rgba(253,121,131,0.3)',
            ],
            borderColor:"darkblue",
            borderWidth: 1
          }]
        },
        options: {
          responsive : true,
           scale: {
                 ticks: {
                    display: false,
                    beginAtZero: true,
                    max: 5
                },
              pointLabels: {
                fontSize: 13,
               },
               gridLines: { 
                color: "darkblue",
                 },
               angleLines: { 
                color: "darkblue",
                 },  
            },
            legend: {
            display: false
          },


          tooltips : {
            enabled : false
          }
        }
      });

      // graphics chart
      var ctx2 = document.getElementById("graphicsChart");
      new Chart(ctx2, {
        type: 'radar',
        data: {
          labels: ["Photoshop", "Illustrator","After effect", "Xdesign",],
          datasets: [{
            label: '# of Votes',
            data: [4.5,4,3,3],
            backgroundColor: [
            'rgba(253,121,131,0.3)',
            ],
            borderColor:"darkblue",
            borderWidth: 1
          }]
        },
        options: {
          responsive : true,
           scale: {
                 ticks: {
                    display: false,
                    beginAtZero: true,
                    max: 5
                },
              pointLabels: {
                fontSize: 13,
                  },
              gridLines: { 
                color: "darkblue",
                 },
               angleLines: { 
                color: "darkblue",
                 },     
            },
            legend: {
            display: false
          },
          tooltips : {
            enabled : false
          }
        }
      });
     }
    
      
    render() {
        return (
   
             <div class="row">

                <div class="col" style={{width:'500px', height:'500px'}}>
                   <canvas id="codingChart"></canvas>
                </div>
                <div class="col"  style={{width:'500px', height:'500px'}}>
                   <canvas id="graphicsChart"></canvas>
                </div>

            </div>
     
        )
    }
}

export default Skills
