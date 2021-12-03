import React from 'react'
import Button from '../Button';
import styles from './_menuItem.module.scss';

const MenuItem = ({ item, handleClick, cart }) => {
    const imagePath = `/images/${item.image}`;
    const itemPrice = item.price / 100;
    const btnMode = cart.some(e => e.id === item.id);
    return (
        <li className={styles.menuItem}>
            <div className={styles.plate}>
                <img src={imagePath} alt={item.alt} className={styles.plate} />
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.price}>${itemPrice}</p>
                <Button handleClick={handleClick} price={item.price} id={item.id} mode={btnMode} />
            </div>
        </li>
    )
}

export default MenuItem
