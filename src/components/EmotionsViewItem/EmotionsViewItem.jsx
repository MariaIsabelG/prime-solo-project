import { useState } from 'react';
import { useDispatch } from 'react-redux';


function EmotionsViewItem ({emotion}){

    const dispatch = useDispatch();
    const [emotionValue, setEmotionValue] = useState({emotion_value: '', emotion_name: ''})

    function handleValue (value, name){

        setEmotionValue({emotion_value: value, emotion_name: name})
        dispatch({
            type: 'EMOTION_VALUE',
            payload: emotionValue
        })
        
    };

    console.log('This is emotion value:', emotionValue);
    

    return (
        <>
        <span>
            <button onClick={(event) => handleValue(emotion.emotion_value, emotion.emotion_name)}>{emotion.emotion_name}</button>
        </span>
        </>
    )

};

export default EmotionsViewItem;