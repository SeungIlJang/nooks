import React, { useState, useEffect } from "react";
import './App.css';
import {useDeviceOrientation} from "./hooks/hook2/useDeviceOrientation";
import {useFavicon} from "./hooks/hook2/useFavicon";
import {useGeolocation} from "./hooks/hook2/useGeolocation";
import {useKeyPress} from "./hooks/hook2/useKeyPress";
import {useLocalStorage} from "./hooks/hook2/useLocalStorage";
import {useMousePosition} from "./hooks/hook2/useMousePosition";
import {useOnline} from "./hooks/hook2/useOnline";
import {useLockScroll} from "./hooks/hook2/useLockScroll";

function App() {
    //1.useDeviceOrientation
    const { alpha, beta, gamma } = useDeviceOrientation();
    //2.useFavicon
    const setFavicon = useFavicon("https://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico");
    //"https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico?_nc_x=2pvBeySk9lk"
    //3.useGeolocation
    const {
        coords: { lat, long },
        error: geoError
    } = useGeolocation();
    //4.useKeyPress
    const kPressed = useKeyPress("k");
    const iPressed = useKeyPress("i");
    const mPressed = useKeyPress("m");
    const cPressed = useKeyPress("c");
    const hPressed = useKeyPress("h");
    //5.useLocalStorage
    const { currentLS, setLS } = useLocalStorage("currentLS", "");
    //6.useMousePosition
    const { x, y } = useMousePosition();
    const isOnLine = useOnline();
    const [isLocked, { lockScroll, unlockScroll }] = useLockScroll();
    return (

        <div className="App">
            <h1>Superhooks!</h1>
            <h3>1.useDeviceOrientation</h3>
            <ul>
                <li>Alpha: {alpha}</li>
                <li>Beta: {beta}</li>
                <li>Gamma: {gamma}</li>
            </ul>
            <h3>2.useFavicon</h3>
            <button
                onClick={() =>
                    setFavicon(
                        "https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico?_nc_x=2pvBeySk9lk"
                    )
                }
            >Change Favicon</button>
            <h3>3.useGeolocation</h3>
            <ul>
                <li>Latitude: {lat}</li>
                <li>Longitude: {long}</li>
                <li>Geolocation Error: {geoError || "null"}</li>
            </ul>
            <h3>4.useKeyPress</h3>
            <ul>
                <li>Pressed 'k': {kPressed && "K"} </li>
                <li>Pressed 'i': {iPressed && "I"} </li>
                <li>Pressed 'm': {mPressed && "M"}</li>
                <li>Pressed 'c': {cPressed && "C"}</li>
                <li>Pressed 'h': {hPressed && "H"}</li>
                <li>Pressed 'i': {iPressed && "I"}</li>
            </ul>
            <h3>5.useLocalStorage</h3>
            <ul>
                <li>Current Value: {currentLS}</li>
                <button onClick={() => setLS("12345")}>Set value: 12345</button>
                <button onClick={() => setLS(null)}>Clear LS</button>
            </ul>
            <h3>6.useMousePosition</h3>
            <ul>
                <li>Mouse X: {x} </li>
                <li>Mouse Y: {y} </li>
            </ul>
            <h3>7.useOnline</h3>
            <span>Are we online? {isOnLine ? "Yes" : "No"}</span>
            <h3>8.useLockScroll</h3>
            <h4>Is locked? {isLocked ? "Yes" : "No"} </h4>
            <button onClick={lockScroll}>Lock scroll</button>{" "}
            <button onClick={unlockScroll}>Unlock Scroll</button>
        </div>

    );
}

export default App;
