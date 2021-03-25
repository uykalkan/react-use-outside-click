import { useEffect } from "react";

export const useOutsideClick = (excludeClass: string, callback: () => void): void => {
    useEffect(() => {

        function handleClickOutside() {
            const specifiedElements = document.getElementsByClassName(excludeClass);

            document.addEventListener('click', (event : any) => {

                let foundSpesificElement;

                Array.from(specifiedElements).forEach((spesificElement => {
                    if (spesificElement.contains(event.target)) {
                        foundSpesificElement = true;
                    }
                }));

                if (!foundSpesificElement) {
                    callback()
                }
            });
        }

        function handleEsc(event: KeyboardEvent){
            if(event.keyCode === 27) {
                callback()
            }
        }

        document.addEventListener("keydown", handleEsc, false);
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEsc, false);
        };
    }, []);
  };

