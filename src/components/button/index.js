import React from 'react'
import styles from "./style.module.scss"
import { Button as Butt } from "reactstrap"
function Button({ text, color, size, onClick }) {
    return (
        <Butt
            size={size}
            onClick={onClick}
            className={`${styles.btn}`}>{text}</Butt>
    )
}

export default Button
