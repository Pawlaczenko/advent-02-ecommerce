import React from 'react'
import MenuItem from '../MenuItem';
import styles from './_menuList.module.scss';

const MenuList = ({ items, cart, handleClick }) => {
    return (
        <ul className={styles.menuList}>
            {items.map(item => {
                return <MenuItem key={item.id} item={item} handleClick={handleClick} cart={cart} />
            })}
        </ul>
    )
}

export default MenuList
