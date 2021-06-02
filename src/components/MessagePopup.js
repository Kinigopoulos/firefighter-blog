import React, {useState, useEffect} from "react";

function MessagePopup({ message, color }) {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (message !== '') {
            setSeconds(5000);
        }
    }, [message]);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setSeconds(0)
        }, seconds);

        return () => {
            clearTimeout(timeId)
        }
    }, [seconds]);

    return (
        <>
            {
                <div className={`messageContainer ${seconds !== 0 ? 'active' : ''}`}>
                    <span className={color}>
                        {message}
                    </span>
                </div>
            }
        </>
    )
}

export default MessagePopup;