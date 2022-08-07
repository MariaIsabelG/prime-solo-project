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
        labels: [],
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
            
            <div className="overviewchart-container" style={{width: '500px', margin: '0 auto'}}>
            <h5>Overview Chart</h5>
                <Bar data = {data}/>
            </div> 
        </div>

        

    )
    };

export default OverviewChart;