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

    const studentNames = responses.map((response) => response.name);
    const studentEmotions = responses.map((response) => response.evalue);
    const studentSensations = responses.map((response) => response.svalue); 

    return(
        <div>
            
            <div className="overviewchart-container" style={{width: '550px', height:'auto', margin: '0 auto'}}>
            <h5>Overview Chart</h5>
                <Bar width='1000em' height='1000em' data={{
                    labels: studentNames,
                    datasets: [{
                        label: 'Emotions',
                        data: studentEmotions,
                        backgroundColor: 'rgb(219, 105, 231)',
                        yAxisID: 'emotion',
                        }, {
                        label: 'Sensations',
                        data: studentSensations,
                        backgroundColor: 'rgb(81, 103, 231)',
                        yAxisID: 'sensation',
                        }]}}
                options={{
                    maintainAspectRatio: true,
                    plugins: {
                        legend:{
                            labels:{
                                font:{
                                    size: '16px',
                                    weight: 'bold',
                                }
                            }
                        }},
                    scales: {
                        emotion: {
                            beginAtZero: true,
                            type: 'linear',
                            position: 'left',
                            min: 0,
                            max: 15,
                            ticks: {
                                font:{
                                    size: '16px',
                                },
                                color: 'rgb(219, 105, 231)',
                                stepSize: 1,
                                callback: function (value){
                                    if( value == 1 ){
                                        return 'Calm';
                                    }if (value == 2 ){
                                        return 'Joyous';
                                    }if( value == 3 ){
                                        return 'Confident';
                                    }if (value == 4 ){
                                        return 'Bored';
                                    }if( value == 5 ){
                                        return 'Tired';
                                    }if (value == 6 ){
                                        return 'Neutral';
                                    }if( value == 7 ){
                                        return 'Confused';
                                    }if (value == 8 ){
                                        return 'Worried';
                                    } if (value == 9 ){
                                        return 'Disappointed';
                                    }if( value == 10 ){
                                        return 'Scared';
                                    }if (value == 11 ){
                                        return 'Anxious';
                                    }if( value == 12 ){
                                        return 'Frustrated';
                                    }if (value == 13 ){
                                        return 'Furious';
                                    }if( value == 14 ){
                                        return 'Terrified';
                                    }if (value == 15 ){
                                        return 'Sad';
                                    }
                                return value;
                                }
                            }
                        },
                        sensation: {
                                beginAtZero: true,
                                type: 'linear',
                                position: 'right',
                                min: 0,
                                max: 15,
                                grid: {
                                    drawOnChartArea: false
                                },
                                ticks: {
                                    stepSize: 1,
                                    color: 'rgb(81, 103, 231)',
                                    font: {
                                            size: '16px',
                                        },
                                    callback: function (value){
                                        if( value == 1 ){
                                            return 'Relaxed';
                                        }if (value == 2 ){
                                            return 'Energized';
                                        }if( value == 3 ){
                                            return 'Focused';
                                        }if (value == 4 ){
                                            return 'Slow';
                                        }if( value == 5 ){
                                            return 'Yawn';
                                        }if (value == 6 ){
                                            return 'Bored';
                                        }if( value == 7 ){
                                            return 'Sleepy';
                                        }if (value == 8 ){
                                            return 'Fidgety';
                                        } if (value == 9 ){
                                            return 'Weepy';
                                        }if( value == 10 ){
                                            return 'Heavy Chest';
                                        }if (value == 11 ){
                                            return 'Hot Face';
                                        }if( value == 12 ){
                                            return 'Tense';
                                        }if (value == 13 ){
                                            return 'Shutoff';
                                        }if( value == 14 ){
                                            return 'Fast breath';
                                        }if (value == 15 ){
                                            return 'Pain';
                                        }

                                        return value;
                                    }
                                }
                            }
                        }
                    }}/>
            </div> 
        </div>

        

    )
    };

export default OverviewChart;

