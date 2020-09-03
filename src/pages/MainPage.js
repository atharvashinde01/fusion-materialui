import React from 'react';

const MainPage = () => {
    const headerStyle = {
        textAlign:"center",
        color:"#ff9800"
    };

    const bodyStyle = {
        color: "black",
        textAlign:"center"
    }
    return(
        <>
        <h1 style={headerStyle}>
            Welcome to Fusion Ware
            </h1>
        <div style={bodyStyle}>
            This is the display page!
        </div>
        </>
    );
};

export default MainPage;