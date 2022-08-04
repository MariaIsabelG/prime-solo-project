import { useDispatch } from 'react-redux';

function EmotionsViewItem ({emotion}){

    const dispatch = useDispatch();

    const handleValue  = (emotion_id, emotion_name) => {

        dispatch({
            type: 'EMOTION_VALUE',
            payload: {emotion_id, emotion_name}
        })  
    }

    return (
        <>
        <span>
            <button onClick={()=>handleValue(emotion.id, emotion.emotion_name)}>{emotion.emotion_name}</button>
        </span>
        </>
    )
}

export default EmotionsViewItem;