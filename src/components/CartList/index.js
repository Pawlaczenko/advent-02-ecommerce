import React from 'react'
import CartItem from '../CartItem';
import styles from './_cartList.module.scss';

const CartList = ({ items, allItems, handleCount, total }) => {
    return (
        <ul className={styles.cartList}>
            {(items.length < 1)
                ? <p className={styles.empty}>Your cart is empty</p>
                : <>
                    {items.map(item => {
                        let itemContent = allItems.find(e => e.id == item.id);
                        return <CartItem key={item.id} item={item} itemContent={itemContent} handleCount={handleCount} />
                    })}
                    <div className={styles.totals}>
                        <div className={styles.lineItem}>
                            <div className={styles.label}>Subtotal:</div>
                            <div className={`${styles.amount} ${styles.price} ${styles.subtotal}`}>${total.subTotal}</div>
                        </div>
                        <div className={styles.lineItem}>
                            <div className={styles.label}>Tax:</div>
                            <div className={`${styles.amount} ${styles.price} ${styles.tax}`}>${total.tax}</div>
                        </div>
                        <div className={`${styles.lineItem} ${styles.total}`}>
                            <div className={styles.label}>Total:</div>
                            <div className={`${styles.amount} ${styles.price} ${styles.total}`}>${total.total}</div>
                        </div>
                    </div>
                </>}
        </ul>
    )
}

export default CartList
