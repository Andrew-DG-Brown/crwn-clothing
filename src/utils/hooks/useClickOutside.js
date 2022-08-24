import { useRef, useEffect } from "react";

export const useClickOutside = (setter) => {
  const domNode = useRef();

  useEffect(() => {
    const eventHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        setter();
      }
    };

    document.addEventListener("mousedown", eventHandler);

    return () => document.removeEventListener("mousedown", eventHandler);
  }, []);

  return domNode;
};
