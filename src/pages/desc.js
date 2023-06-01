import React from 'react';
import styles from "./desc.module.css";
import Seo from '../components/seo'

export default () => {
    return (
        <div className={styles.myComponent}>
            How with component styles
        </div>
    );
}

export const Head = () => <Seo title="Description" />
