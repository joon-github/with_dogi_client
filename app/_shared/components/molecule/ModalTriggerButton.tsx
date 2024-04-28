import { useDisclosure } from "@nextui-org/react";

import { Modal } from "@/app/_shared/components/atom";

interface Props {
  title: string;
  contents: string;
  children?: React.ReactNode;
}

export default function ModalTriggerButton({
  title,
  contents,
  children,
}: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div>
      <button type="button" onClick={onOpen}>
        {children}
      </button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <Modal.Content>
          <Modal.Header className="flex flex-col gap-1">{title}</Modal.Header>
          <Modal.Body>{contents}</Modal.Body>
        </Modal.Content>
      </Modal>
    </div>
  );
}
