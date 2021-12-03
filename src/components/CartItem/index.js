import React from 'react'
import styles from './_cartItem.module.scss';
import chevron from '../../assets/images/chevron.svg';

const CartItem = ({ item, itemContent, handleCount }) => {
    const imagePath = `/images/${itemContent.image}`;
    const itemPrice = itemContent.price / 100;
    const subTotal = Math.round(itemPrice * item.count * 100) / 100;
    return (
        <li className={styles.cartItem}>
            <div className={styles.plate}>
                <img src={imagePath} alt={itemContent.alt} className={styles.plate} />
                <div className={styles.quantity}>{item.count}</div>
            </div>
            <div className={styles.content}>
                <p className={styles.name}>{itemContent.name}</p>
                <p className={styles.price}>${itemPrice}</p>
            </div>
            <div className={styles.quantity__wrapper}>
                <button onClick={() => handleCount(item.id, -1)} className={styles.decrease}>
                    <img src={chevron} />
                </button>
                <div className={styles.quantity}>{item.count}</div>
                <button onClick={() => handleCount(item.id, 1)} className={styles.increase}>
                    <img src={chevron} />
                </button>
            </div>
            <div className={styles.subtotal}>
                ${subTotal}
            </div>
        </li>
    )
}

export default CartItem
