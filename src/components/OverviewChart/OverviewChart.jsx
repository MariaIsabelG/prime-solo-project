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
    
    const overview = useSelector( (store) => store.overview);
    let studentName = overview.map((value)=> value.full_name);
    console.log( 'This is overview data:', overview );


    
    const data = { 
        labels: [studentName],
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