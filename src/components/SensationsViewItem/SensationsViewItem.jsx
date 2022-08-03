

function SensationsViewItem ({sensation}){



    return (
        <>
        <span>
            <button value={sensation.sensation_value}>{sensation.sensation_name}</button>
        </span>
        </>
    )

};

export default SensationsViewItem;