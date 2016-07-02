import React from 'react';
import TopNavBar from '../TopNavBar';

function App({ children }) {
    return (
        <div>
            <TopNavBar />
            {children}
        </div>
    );
}

export default App;