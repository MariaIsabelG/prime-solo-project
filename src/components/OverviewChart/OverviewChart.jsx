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
    
    const responses = useSelector((store) => store.responses);
    const names = responses.map((response) => response.name);
    const emotions = responses.map((response) => response.evalue);
    

    
    const chartdata = { 
        labels: names,
        datasets: [{
            label: 'Emotions',
            data: emotions,
            backgroundColor: 'pink',
            yAxisID: 'emotion',
            }
        ],    
        }

    return(
        <div>
            
            <div className="overviewchart-container" style={{width: '550px', height:'auto', margin: '0 auto'}}>
            <h5>Overview Chart</h5>
                <Bar data={chartdata}  />
            </div> 
        </div>

        

    )
    };

export default OverviewChart;