import { useSelector } from "react-redux";
import React from "react";

function LoadingScreen() {
    const loading = useSelector((state) => state.loading);

    const styles = {
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        fontSize: "3rem"
    };

    styles.display = loading ? "flex" : "none";

    return (
        <div id="loadingScreen" style={styles}>
            <h1> LOADING . . . </h1>
        </div>
    );
}

export default LoadingScreen;
