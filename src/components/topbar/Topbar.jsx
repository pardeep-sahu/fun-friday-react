import React from "react";
import "./topbar.css";
import { BsBell, BsGlobe, BsGearFill } from "react-icons/bs";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Fun Friday Admin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <BsBell />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <BsGlobe />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <BsGearFill />
                    </div>
                    <div className="topbarIconContainer">
                        <img src="https://loremflickr.com/640/360" alt="avatar" className="topAvatar" />
                    </div>

                </div>
            </div>
        </div>
    )
}