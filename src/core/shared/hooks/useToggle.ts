import { useState } from "react";

export const useToggle = (items) => {
  const [elements, setElements] = useState(items);

  const handleOpen = (index: number) => {
    const alterSbModules = elements
      .map((sb) => (sb.id === index ? { ...sb } : { ...sb, isOpen: false }))
      .map((sb) =>
        sb.id === index ? { ...sb, isOpen: !sb.isOpen } : { ...sb }
      );
    setElements(alterSbModules);
  };

  return {
    elements,
    setElements,
    handleOpen,
  };
};
