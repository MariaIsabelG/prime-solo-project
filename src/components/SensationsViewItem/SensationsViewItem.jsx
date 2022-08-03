

function EmotionsViewItem ({emotion}){



    return (
        <>
        <span>
            <button value={emotion.emotion_value}>{emotion.emotion_name}</button>
        </span>
        </>
    )

};

export default EmotionsViewItem;