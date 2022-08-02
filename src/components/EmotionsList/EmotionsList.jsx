import { useDispatch, useSelector } from 'react-redux';



function EmotionsList (){

    const dispatch = useDispatch();
    const emotions = useSelector( store => store.emotions);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_EMOTIONS'
        })
    },[])

    return (
        <div className="grey-div">
                {emotions.map((emotion) => {
                    return <EmotionsItem key={emotion.id} student={emotion} />
                })}
        </div>
    )

};

export default EmotionsList;