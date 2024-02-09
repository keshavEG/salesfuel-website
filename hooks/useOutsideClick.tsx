import { useEffect } from "react";

export default function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: React.EventHandler<React.MouseEvent | React.TouchEvent>
) {
  useEffect(() => {
    const listener = (event: React.MouseEvent | React.TouchEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener as any);
    document.addEventListener("touchstart", listener as any);
    return () => {
      document.removeEventListener("mousedown", listener as any);
      document.removeEventListener("touchstart", listener as any);
    };
  }, [ref, handler]);
}
