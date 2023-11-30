import { useState } from "react";
import "./App.css";
import { FileContext } from "./context/FileContext";
import OptionsScreen from "./page/OptionsScreen";
import HomeScreen from "./page/HomeScreen";

function App() {
  const [file, setFile] = useState<File | null>(null);

  const handleFile = (file: File) => {
    setFile(file);
  };
  return (
    <>
      <FileContext.Provider value={{ file, setFile: handleFile }}>
        {file !== null ? <OptionsScreen /> : <HomeScreen />}
      </FileContext.Provider>
    </>
  );
}

export default App;
