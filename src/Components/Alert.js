import React from 'react'

function Alert(props) {
    const capitalized = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <>
            <div style={{ height: '45px', paddingTop : '45px'}}>
                {
                    props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
                        <strong>{capitalized(props.alertMessage.type)}</strong> : {props.alertMessage.msg}
                    </div>
                }
            </div>
        </>

    )
}

export default Alert