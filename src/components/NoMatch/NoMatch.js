import React from 'react';

const NoMatch = () => {
    const noMatchStyle = {
        color: 'red',
        fontSize: '20px',
        margin: '20px'
    }
    return (
        <div style={noMatchStyle}>
            <h2>404 Not Found</h2>
        </div>
    );
};

export default NoMatch;