import React, { useRef, useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const fileSchema = z.object({
  fileName: z.string().min(1, "File name is required"),
});

type FileFormInputs = z.infer<typeof fileSchema>;

interface FileListProps {
  files: string[];
  onAddFile: (fileName: string) => void;
}

export const FileList = ({ files, onAddFile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FileFormInputs>({
    resolver: zodResolver(fileSchema),
  });

  const onSubmit: SubmitHandler<FileFormInputs> = (data) => {
    onAddFile(data.fileName);
    setIsModalOpen(false);
    console.log("checking...");
  };

  return (
    <div>
      <Button onPress={() => setIsModalOpen(true)}>Add File</Button>
      <ul>
        {files.map((file: string, index: number) => (
          <li key={index}>{file}</li>
        ))}
      </ul>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalHeader style={{ marginBottom: "20px" }}>
          Add new file here:{" "}
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              {...register("fileName")}
              label="File name"
              placeholder="Enter file name here"
            />
            {errors.fileName && <span>{errors.fileName.message}</span>}
            <Button type="submit">Create</Button>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default FileList;
