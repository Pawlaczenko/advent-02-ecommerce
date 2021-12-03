import React from 'react'
import styles from './_panel.module.scss';

const Panel = ({ children, title }) => {
    return (
        <div className={styles.panel}>
            <h1 className={styles.title}>{title}</h1>
            {children}
        </div>
    )
}

export default Panel
