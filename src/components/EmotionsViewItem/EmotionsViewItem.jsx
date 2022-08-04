import { useState } from 'react';

function EmotionsViewItem ({emotion}){

    const [emotionValue, setEmotionValue] = useState({emotion_value: ''})

    function handleValue (value){

        setEmotionValue({emotion_value: value})
        
    };

    console.log('This is emotion value:', emotionValue);
    




    return (
        <>
        <span>
            <button onClick={(event) => handleValue(emotion.emotion_value)}>{emotion.emotion_name}</button>
        </span>
        </>
    )

};

export default EmotionsViewItem;