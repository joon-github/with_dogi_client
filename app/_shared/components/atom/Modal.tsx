import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@nextui-org/react";

interface Props {
  children: React.ReactNode;
}

function AtomModalBody({ children }: Props) {
  return <ModalBody>{children}</ModalBody>;
}

function AtomModalHeader({ ...props }) {
  return <ModalHeader {...props} />;
}

function AtomModalContent({ children }: Props) {
  return <ModalContent>{children}</ModalContent>;
}

function AtomModalFooter({ children }: Props) {
  return <ModalFooter>{children}</ModalFooter>;
}

interface ModalProps extends Props {
  onOpenChange: (open: boolean) => void;
  isOpen: boolean;
}
function AtomModal({ children, ...props }: ModalProps) {
  return <Modal {...props}>{children}</Modal>;
}

AtomModal.Header = AtomModalHeader;
AtomModal.Content = AtomModalContent;
AtomModal.Footer = AtomModalFooter;
AtomModal.Body = AtomModalBody;

export default AtomModal;
