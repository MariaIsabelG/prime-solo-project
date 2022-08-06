import { useDispatch } from 'react-redux';
import { useState } from 'react';


function EmotionsViewItem ({emotion}){

    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(true);

    const handleValue  = (emotion_id, emotion_name) => {

        dispatch({
            type: 'EMOTION_VALUE',
            payload: {emotion_id, emotion_name}
        })
        setToggle(!toggle)
    }

    return (
        <>
        <span onClick={()=>handleValue(emotion.id, emotion.emotion_name)}>
            {toggle ?
            <span>
            <button >{emotion.emotion_name}</button>
            </span>:
            <span>
            <button>{emotion.emotion_gif}</button>
            </span>
            }

        </span>

        </>
    )
}

export default EmotionsViewItem;