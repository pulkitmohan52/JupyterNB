import { useState } from "react";
import React from "react";
import { Button, Textarea } from "@nextui-org/react";

interface CodeCellProps {
  initialCode: string;
  onRunCode: (code: string) => void;
}

const Codecell = ({ initialCode, onRunCode }) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  return <div>code cells</div>;
};

export default Codecell;
