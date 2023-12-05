import React, { ChangeEvent, useContext, useState } from "react";
import "../index.css";
import { FileContext } from "../context/FileContext";

export const HomeScreen: React.FC = () => {
  const [selectedPdf, setSelectedPdf] = useState<File | null>(null);
  const { setFile } = useContext(FileContext);
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedPdf(event.target.files[0]);
      console.log(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedPdf) {
      setFile(selectedPdf);
    }
  };
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div>
          <div className="flex justify-center items-center w-full">
            <div>
              <img className="w-28 mb-4" src="/src/assets/img/LOGO.jpg" alt="logo heart" />
            </div>
          </div>
          <h1 className="title-heart">Heart Help</h1>
          <h2 className="paragrahp-company mt-7"> Your Company</h2>
        </div>
        <div className="container-button mt-5">
          <button className="buttonSend" onClick={handleUpload}>
            Subir PDF
          </button>
          <label htmlFor="pdf" className="buttonSend">
            {" "}
            PDF{" "}
          </label>
          <input
            id="pdf"
            className="hidden"
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
          />
        </div>
        <div className="mt-4">
          <p className="text-xs font-bold tracking-tight text-black sm:text-4xl">
            {" "}
            {selectedPdf ? selectedPdf.name : "No hay pdf seleccionado"}{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
