import React from 'react';
import TopNavBar from '../TopNavBar';
import styles from './App.css';

function App({ children }) {
    return (
        <div>
            <TopNavBar />
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
}

export default App;