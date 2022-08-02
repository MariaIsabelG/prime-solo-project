

function EmotionsItem ({emotion}){

    console.log('This is an emotion:', emotion);

    return (
        <span>
            <button>{emotion.emotion_name}</button>
        </span>
    )

};

export default EmotionsItem;