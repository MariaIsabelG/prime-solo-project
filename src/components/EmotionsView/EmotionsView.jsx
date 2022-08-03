import { useDispatch, useSelector } from 'react-redux';
import EmotionsItem from '../EmotionsItem/EmotionsItem';
import { useEffect } from 'react';

function EmotionsView (){

    const dispatch = useDispatch();
    const emotions = useSelector( store => store.emotions);

    useEffect(() => { 
        dispatch({
            type: 'FETCH_EMOTIONS'
        })
    },[])

    return (
        <div className="grey-div">
            <h3>What emotion are you feeling at this moment?</h3>
                {emotions.map((emotion) => {
                    return <EmotionsItem key={emotion.id} emotion={emotion} />
                })}
        </div>
    )

};

export default EmotionsView;