import React, { useState } from "react";
import "./sidebar.scss";

import { InputText } from "primereact/inputtext";
import Trends from "./Trends";

export default function Sidebar() {
  const [searchText, setSearchText] = useState(null);
  const [isFocus, setIsFocus] = useState(null);

  return (
    <div className="sidebar-component">
      <div className="sidebar-component-searchbar">
        <span className="p-input-icon-left">
          <i
            className="pi pi-search"
            style={isFocus ? { color: "#1987D2" } : { color: "#676C71" }}
          />
          <InputText
            value={searchText}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(e) => setSearchText(e.target.value)}
            className="global-input-text search-input"
            placeholder="Search"
          />
        </span>
      </div>
      <div className="sidebar-component-trends">
        <Trends />
      </div>
    </div>
  );
}
