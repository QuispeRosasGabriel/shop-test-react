import React from 'react'

const Button = ({ onClick, type, content }) => (
    <button onClick={onClick} className={`btn btn_${type}`}>
        {content}
    </button>
)

export default Button
