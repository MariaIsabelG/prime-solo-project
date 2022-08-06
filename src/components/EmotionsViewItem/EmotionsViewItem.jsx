import { useDispatch } from 'react-redux';
import { useState } from 'react';


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
        <div onClick={()=>handleValue(emotion.id, emotion.emotion_name)}>
            <button className='emotion-btn'>{emotion.emotion_name}</button>
        </div>

        </>
    )
}

export default EmotionsViewItem;