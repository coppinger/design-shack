import Hero from "./Hero";
import "xp.css/dist/XP.css";
import React from "react";
import ReactDOM from "react-dom";

export async function PageHome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="window"
        style={{
          width: "90vw",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="title-bar">
          <div className="title-bar-text">Design Shack</div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" />
            <button aria-label="Maximize" />
            <button aria-label="Close" />
          </div>
        </div>
        <div
          className="window-body"
          style={{
            flex: 1,
            overflow: "hidden",
            margin: 0,
          }}
        >
          <iframe
            src="https://build-in-public-network.vercel.app/admin/tags"
            frameBorder="0"
            style={{
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              overflow: "hidden",
            }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
