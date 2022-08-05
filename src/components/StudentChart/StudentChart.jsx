import { useSelector } from 'react-redux';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function StudentChart (){

    const student = useSelector( (store) => store.edit);
    const emotions = useSelector( (store) => store.emotions);

    console.log('The emotions:', emotions)


    const data = { 
        labels: ['Morning', 'Midday', 'Afternoon'],
        datasets: [{
            label: 'Emotions',
            data: [],
            backgroundColor: 'pink',
            tension: .2,
            yAxisID: 'emotion',
            }
            ,{
            label: 'Sensation',
            data: [],
            backgroundColor: 'lightblue', 
            tension: .2,   
            yAxisID: 'physical',
            }
        ],
            
        }

    return (
        <div>
        <h1>Student Chart!</h1>
        <p>{student.full_name}</p>
            <div style={{width: '500px', margin: '0 auto'}}>
                <Line data = {data}/>
            </div> 
        </div>
    )
};

export default StudentChart;
