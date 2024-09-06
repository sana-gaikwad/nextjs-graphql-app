import React, { createContext, ReactNode, useContext, useState } from "react";
import { ModalComponentProps, ModalContextType } from "./Modal.types";
import { Modal } from "./Modal";

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = () => {
  const context = useContext(ModalContext);
  console.log("context", context);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalProps, setModalProps] = useState<Partial<ModalComponentProps>>();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (props?: Partial<ModalComponentProps>) => {
    if (!props) {
      return;
    }
    setModalProps(props);
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <Modal {...modalProps} isOpen={isOpen} onClose={closeModal}>
        {modalProps?.children}
      </Modal>
    </ModalContext.Provider>
  );
};
