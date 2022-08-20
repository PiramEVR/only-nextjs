import styles from '../styles/Button.module.css'
import React, {memo} from "react";

interface IButton {
    isActive: boolean
    onClickHandler: () => void
    children: React.ReactNode
}

export const Button = memo(({isActive, onClickHandler, children}: IButton) => {
    console.log('b')
    return (
        <button
            className={isActive
                ? `${styles.button} ${styles.active}`
                : `${styles.button}`
            }
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
})