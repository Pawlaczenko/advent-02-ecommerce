import React from 'react'
import styles from './_button.module.scss';
import check from '../../assets/images/check.svg';

const Button = ({ id, price, handleClick, mode }) => {
    let btnTitle = mode ? "In Cart" : "Add to Cart";
    let btnClass = mode ? styles.added : "";
    return (
        <button disabled={mode} onClick={() => { handleClick(id, price / 100) }} className={`${styles.button} ${btnClass}`}>
            {mode && <img src={check} alt="Check" />}
            {btnTitle}
        </button >
    )
}

export default Button
