import { useState, useCallback } from "react";

interface UseModal {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

function useModal(): UseModal {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  }, []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal
  };
}

export default useModal;
