import React, { ChangeEvent, useContext, useState } from "react";
import "../index.css";
import { FileContext } from "../context/FileContext";



export const HomeScreen: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const { setFile } = useContext(FileContext);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedPdf(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedPdf) {
      setFile(selectedPdf);
    }
  };
  return (
    <div className="container">
      <div>
        <img className="logo" src="/src/assets/img/LOGO.jpg" alt="logo heart" />
        <h1 className="title-heart">Heart Help</h1>
        <h2 className="paragrahp-company"> Your Company</h2>
      </div>
      <div className="container-button">
        <button className="buttonSend" onClick={handleUpload}>
          Subir PDF
        </button>
        <input
          className="input-pdf"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
