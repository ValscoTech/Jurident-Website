import React, { useEffect, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
const Mode_btn = () => {
    let [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) document.documentElement.classList.add("dark");
        else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);
    return (
        <button
            className="modeSwitch"
            onClick={() => {
                setDarkMode(!darkMode);
            }}
        >
            {darkMode ? (
                <BsFillMoonStarsFill />
            ) : (
                <BsFillSunFill style={{ color: "black" }} />
            )}
        </button>
    );
};

export default Mode_btn;
