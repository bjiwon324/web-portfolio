import { useState } from "react";

interface UseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

function useModal(): UseModal {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleModal = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
}

export default useModal;
