import React from "react";
import "./menuOverlaypanel.scss";

import { OverlayPanel } from "primereact/overlaypanel";

export default function MenuOverlaypanel({ op }) {
  return (
    <div>
      <OverlayPanel
        ref={op}
        id="overlay_panel"
        style={{ width: "300px" }}
        className="overlaypanel"
      >
        <div className="overlaypanel-content">
          <div className="overlaypanel-items">Add an existing account</div>
          <div className="overlaypanel-items">Log out @BekirCanAta</div>
        </div>
      </OverlayPanel>
    </div>
  );
}
