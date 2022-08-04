import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';


function OverviewChart(){

    const dispatch = useDispatch();

    useEffect(() => { 
        dispatch({
            type: 'GET_OVERVIEW_DATA',
        })
    },[])
    



    
    const data = { 
        labels: ['Babis', 'Michael', 'Paola'],
        datasets: [{
            label: 'Emotions',
            data: [1, 2, 5],
            backgroundColor: 'pink',
            tension: .2,
            yAxisID: 'emotion',
            }
            ,{
            label: 'Sensation',
            data: [5, 4, 1],
            backgroundColor: 'lightblue', 
            tension: .2,   
            yAxisID: 'physical',
            }
        ],
            
        }

    return(
        <div>
            <h3>Overview Chart</h3>
            <div style={{width: '500px', margin: '0 auto'}}>
                <Bar data = {data}/>
            </div> 
        </div>

        

    )
};

export default OverviewChart;