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
          await fetch("https://17ttz46s-5000.use2.devtunnels.ms/predict", {
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
      <h1>Seleccion de calculo</h1>
      <ul className="list-options ">
        <li className="list-items">
          <img className="icon-options" src="../../public/chevron-right.svg" />{" "}
          <a className="options" href="#">
            Cardiopatia pulmonar
          </a>
        </li>
        <li className="list-items">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            Riesgo de compilacion postoperatoria
          </a>
        </li>
        <li className="list-items">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            Viabilidad de procedimiento en paciente
          </a>
        </li>
        <li className="list-items">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a className="options" href="#">
            Hinpertencion pulmonar
          </a>
        </li>
        <li className="list-items">
          <img className="icon-options" src="../../public/chevron-right.svg" />
          <a onClick={handleUpload} className="options" href="#">
            Resumen del paciente
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OptionsScreen;
