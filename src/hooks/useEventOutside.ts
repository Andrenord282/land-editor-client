// import { useEffect, useRef, MutableRefObject } from "react";

// type EventHandler = (e: MouseEvent) => void;

// const useEventOutside = (
//     elementRef: MutableRefObject<HTMLElement | null>,
//     handleActivate: EventHandler,
//     eventName: string = "click"
// ) => {
//     const handleActivateRef = useRef<EventHandler | undefined>();

//     useEffect(() => {
//         handleActivateRef.current = handleActivate;
//     }, [handleActivate]);

//     useEffect(() => {
//         const handleClickInside: EventHandler = (e) => {
//             if (elementRef.current && !elementRef.current.contains(e.target as Node)) {
//                 handleActivateRef.current && handleActivateRef.current(e as MouseEvent);
//             }
//         };

//         document.addEventListener(eventName, handleClickInside);

//         return () => {
//             document.removeEventListener(eventName, handleClickInside);
//         };
//     }, [elementRef, eventName]);
// };

// export { useEventOutside };
