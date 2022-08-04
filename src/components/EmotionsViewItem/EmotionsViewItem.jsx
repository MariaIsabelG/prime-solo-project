import { useState } from 'react';

function EmotionsViewItem ({emotion}){

    const [emotionValue, setEmotionValue] = useState({emotion_value:''})

    function handleValue (event) {

        setEmotionValue(emotion.emotion_value)
        console.log( 'This is my value:', emotionValue)
    }
    


    return (
        <>
        <span>
            <button value={emotion.emotion_value} onChange={(event)handleValue(event.target.value)}onClick={handleValue}>{emotion.emotion_name}</button>
        </span>
        </>
    )

};

export default EmotionsViewItem;