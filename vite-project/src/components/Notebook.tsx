import React, { useState } from "react";
import FileList from "./FileList";

const Notebook = () => {
  const [files, setFiles] = useState<string[]>([]);

  const handleAddFile = (fileName: string) => {
    setFiles([...files, fileName]);
  };
  return (
    <>
      <FileList files={files} onAddFile={handleAddFile} />
    </>
  );
};

export default Notebook;
