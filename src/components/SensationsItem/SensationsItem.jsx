

function SensationsItem ({sensation}){

    console.log('This is a sensation:', sensation);

    return (
        <span>
            <button>{sensation.sensation_name}</button>
        </span>
    )

};

export default SensationsItem;