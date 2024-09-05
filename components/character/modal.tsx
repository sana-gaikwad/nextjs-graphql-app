import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps as ChakraModalProps,
} from "@chakra-ui/react";
import { Button } from "../common/button";
import React, { ReactNode } from "react";

interface ModalProps extends ChakraModalProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
}
export const Modal = ({ title, children, onClose, ...props }: ModalProps) => {
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
