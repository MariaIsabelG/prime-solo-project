import { useDispatch, useSelector } from 'react-redux';
import EmotionsViewItem from '../EmotionsViewItem/EmotionsViewItem';
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
        <div>
            <h3>What emotion are you feeling at this moment?</h3>
                {emotions.map((emotion) => {
                    return <EmotionsViewItem key={emotion.id} emotion={emotion} />
                })}
            <div>   
                <button>Next</button>
            </div> 
        </div>
    )

};

export default EmotionsView;