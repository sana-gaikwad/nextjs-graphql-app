import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import { ModalComponentProps } from "./Modal.types";
import { Button } from "../button";

export const Modal = ({
  title,
  children,
  onClose,
  ...props
}: ModalComponentProps) => {
  return (
    <>
      <ChakraModal {...props} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </ChakraModal>
    </>
  );
};
