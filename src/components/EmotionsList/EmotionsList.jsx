import { useDispatch, useSelector } from 'react-redux';
import EmotionsItem from '../EmotionsItem/EmotionsItem';
import { useEffect } from 'react';

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
            <h3>Emotions available:</h3>
                {emotions.map((emotion) => {
                    return <EmotionsItem key={emotion.id} emotion={emotion} />
                })}
        </div>
    )

};

export default EmotionsList;