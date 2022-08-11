import { useDispatch } from 'react-redux';

function EmotionsViewItem ({emotion}){

    const dispatch = useDispatch();

    const handleValue  = (emotion_id, emotion_name) => {
        // the id and name of the emotion chosen will be sent to a redux store
        dispatch({
            type: 'EMOTION_VALUE',
            payload: {emotion_id, emotion_name}
        })
    }

    return (
        <>
        {/* each emotion is a button w a specific id */}
        <div onClick={()=>handleValue(emotion.id, emotion.emotion_name)}>
            <button className='emotion-btn'>{emotion.emotion_name}</button>
        </div>

        </>
    )
};

export default EmotionsViewItem;