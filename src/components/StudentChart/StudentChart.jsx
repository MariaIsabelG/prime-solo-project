import { useSelector } from 'react-redux';
import { Line } from 'react-chartjs-2';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
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

function StudentChart (){

    const student = useSelector( (store) => store.edit);
    const dispatch = useDispatch();


        useEffect(() => {
            
            dispatch({
                type: 'GET_STUDENT_DATA',
                payload: student.id,
            })
    
            },[])

            const studentdata = useSelector((store) => store.studentdata);
            
            const timestamps = studentdata.map((timestamp) => timestamp.to_char);
            const evalues = studentdata.map((evalue) => evalue.emotion_value);
            const svalues = studentdata.map((svalue) => svalue.sensation_value);

    return (
        <>
        <h5 className="student-text">Student Chart</h5>
        <div className="student-line-chart-container">
            <Line width='1000em' height='1000em' data={{
                    labels: timestamps,
                    datasets: [{
                        label: 'Emotions',
                        data: evalues,
                        backgroundColor: 'rgb(219, 105, 231)',
                        borderColor:'rgb(219, 105, 231)',
                        tension: '.2',
                        yAxisID: 'emotion',
                        }, {
                        label: 'Sensations',
                        data: svalues,
                        backgroundColor: 'rgb(81, 103, 231)',
                        borderColor:'rgb(81, 103, 231)',
                        tension: '.2',
                        yAxisID: 'sensation',
                        }]}} options={{
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
                                },
                                // maintainAspectRatio: false,
                            }}/>
            </div>
        </>
    )
};

export default StudentChart;

