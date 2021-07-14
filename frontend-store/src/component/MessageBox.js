import React from 'react'

const MessageBox = (props) => {
    return (
        <div className={`alert alert-${props.variant || "info"}`}></div>
    )
}

export default MessageBox
