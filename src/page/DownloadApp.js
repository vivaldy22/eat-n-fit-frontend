import React, { Component } from "react";
import "../../src/DownloadApp.css"
import imgGoogle from "../img/home/googlePlay.png";
import phone from "../img/home/phoneEF.png";
import qrCode from "../img/home/qrCode.png";

class DownloadApp extends Component {
    render(){
        return (
            <div className="download-wrapper">
              <div className="download-container">
                <div className="download-image-container">
                  <img className="download-image" src={phone}/>
                </div>
                <div className="download-app-wrapper">
                  <div className="download-desc-container">
                    <h1 style={{fontFamily:"Lora", fontSize:'50px'}}>
                     Tunggu Apalagi unduh sekarang juga!!
                    </h1>
                  </div>
                  <div className="download-qr-container">
                    <img className="download-playstore" src={imgGoogle} />
                    <img className="download-qr" src={qrCode} />
                  </div>
                </div>
              </div>
            </div>
            
          );

    }
  
}

export default DownloadApp;
