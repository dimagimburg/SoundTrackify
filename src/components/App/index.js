import React from 'react';
import TopNavBar from '../TopNavBar';
import styles from './App.css';

function App({ children }) {
    return (
        <div className={styles.appWrapper}>
            <TopNavBar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default App;