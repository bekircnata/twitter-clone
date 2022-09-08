import React from "react";
import "./menuOverlaypanel.scss"
import { OverlayPanel } from "primereact/overlaypanel";

export default function MenuOverlaypanel({op}) {
  return (
    <div>
      <OverlayPanel ref={op} id="overlay_panel" style={{ width: "300px" }} className="overlaypanel-demo" >
        <div className="overlaypanel-header">
          <div className="menu-footer-container">
            <div className="menu-footer">
              <div className="menu-footer-pic">
                <img className="profile-pic" src="images/profile-pic.jfif" />
              </div>
              <div className="menu-footer-text">
                <p className="name">Bekir Can Ata</p>
                <p className="username">@BekirCanAta</p>
              </div>
              <div className="menu-footer-icon">
                <i className="pi pi-check"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="overlaypanel-content">
          <div className="overlaypanel-items">Add an existing account</div>
          <div className="overlaypanel-items">Log out @BekirCanAta</div>
        </div>
      </OverlayPanel>
    </div>
  );
}
