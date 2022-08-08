import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

function OverviewChart(){

    useEffect(() => {
        
        dispatch({
            type: 'GET_OVERVIEW_DATA',
        })

        },[])

    const dispatch = useDispatch();

    const responses = useSelector((store) => store.responses);
    const evalues = useSelector((store) => store.emotions);

    const studentNames = responses.map((response) => response.name);
    const studentEmotions = responses.map((response) => response.evalue);
    const studentSensations = responses.map((response) => response.svalue);
    const emotionValues = evalues.map((evalue) => evalue.emotion_name); 
    console.log( 'This is emotions:', evalues);
            


    return(
        <div>
            
            <div className="overviewchart-container" style={{width: '550px', height:'auto', margin: '0 auto'}}>
            <h5>Overview Chart</h5>
                <Bar data={{
                    labels: studentNames,
                    datasets: [{
                        label: 'Emotions',
                        data: studentEmotions,
                        backgroundColor: 'pink',
                        yAxisID: 'emotion',
                        }, {
                        label: 'Sensations',
                        data: studentSensations,
                        backgroundColor: 'lightblue',
                        yAxisID: 'sensation',
                        }]}}
                options={{
                    scales: {
                        emotion: {
                            beginAtZero: true,
                            type: 'linear',
                            position: 'left',
                        },
                        sensation: {
                                beginAtZero: true,
                                type: 'linear',
                                position: 'right',
                        }
                    }
                    }}/>
            </div> 
        </div>

        

    )
    };

export default OverviewChart;