import React, { useContext } from "react";
import "../index.css";
import { FileContext } from "../context/FileContext";
import Swal from "sweetalert2";

const OptionsScreen: React.FC = () => {
  const { file } = useContext(FileContext);

  const handleUpload = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        const response = await (
          await fetch("https://3876c02c-5000.use2.devtunnels.ms/predict", {
            method: "POST",
            body: formData,
          })
        ).json();
        const health = response.suitable ? "Apto" : " No apto";

        if (response) {
          Swal.fire({
            title: `El paciente esta: ${health}`,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
            },
          });
        }
      } else {
        alert("Por favor, selecciona un archivo PDF.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-options">
      <h1 className="text-4xl font-extrabold text-purple-700 mb-6">Seleccion de calculo</h1>
      <ul className="bg-gradient-to-r from-pink-300 to-purple-500 p-6 rounded-md shadow-md">
        <li className="py-3 border-b border-purple-400 transition duration-300 hover:bg-purple-200 flex">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            <span className="text-lg font-semibold">Cardiopatia pulmonar</span>
          </a>
        </li>
        <li className="py-3 border-b border-purple-400 transition duration-300 hover:bg-purple-200 flex">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            <span className="text-lg font-semibold">
              Riesgo de compilacion postoperatoria
            </span>
          </a>
        </li>
        <li className="py-3 border-b border-purple-400 transition duration-300 hover:bg-purple-200 flex">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            <span className="text-lg font-semibold">
              Viabilidad de procedimiento en paciente
            </span>
          </a>
        </li>
        <li className="py-3 border-b border-purple-400 transition duration-300 hover:bg-purple-200 flex">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            <span className="text-lg font-semibold">
              Hinpertencion pulmonar
            </span>
          </a>
        </li>
        <li className="py-3 border-b border-purple-400 transition duration-300 hover:bg-purple-200 flex">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a onClick={handleUpload} className="options" href="#">
            <span className="text-lg font-semibold">Resumen del paciente</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OptionsScreen;
