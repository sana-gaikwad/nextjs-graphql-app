import { ModalProps as ChakraModalProps } from "@chakra-ui/react";
export interface ModalComponentProps extends ChakraModalProps {
  title?: string;
}

export interface ModalContextType {
  isOpen: boolean;
  closeModal: () => void;
  openModal: (props: Partial<ModalComponentProps>) => void;
}
