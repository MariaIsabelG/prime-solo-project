function EmotionsItem ({emotion}){

    // this component is a list of emotions in the teacher home page
    return (

        <span>
            <p>{emotion.emotion_name}</p>
        </span>
    )
};

export default EmotionsItem;