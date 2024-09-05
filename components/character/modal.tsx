import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalProps,
} from "@chakra-ui/react";
import { ButtonComponent } from "../common/button";
import React from "react";

interface ModalComponentProps extends ModalProps {
  title: string;
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}
export const ModalComponent = ({
  title,
  isOpen,
  children,
  onClose,
  ...props
}: ModalComponentProps) => {
  return (
    <>
      <Modal {...props} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalFooter>
            <ButtonComponent label="Close" onClick={onClose}></ButtonComponent>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
