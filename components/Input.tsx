import styles from '../styles/Input.module.css'
import {memo} from "react";

interface IInput {
    value: string
    onChangeHandler: (value: string) => void
}

const Input = memo(({value, onChangeHandler}: IInput) => {
    return (
        <input
            className={styles.input}
            type="text"
            placeholder='Введите описание...'
            value={value}
            onChange={(e) => {
                onChangeHandler(e.currentTarget.value)
            }}
        />
    )
})

Input.displayName = 'Input';

export default Input;