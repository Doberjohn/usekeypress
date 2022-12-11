import React, {useEffect, useState} from "react";

export const useKeyPress = (targetKey: number, ctrlRequired = false) => {
   const [keyPressed, setKeyPressed] = useState<boolean>(false);

   function downHandler(e: KeyboardEvent) {
      if (e.ctrlKey) e.preventDefault();
      if (e.keyCode === targetKey) {
         if (!ctrlRequired || (ctrlRequired && e.ctrlKey)) setKeyPressed(true);
      }
   }

   const upHandler = ({ keyCode }: {keyCode: number}) => {
      if (keyCode === targetKey) {
         setKeyPressed(false);
      }
   };

   useEffect(() => {
      window.addEventListener("keydown", downHandler);
      window.addEventListener("keyup", upHandler);
      return () => {
         window.removeEventListener("keydown", downHandler);
         window.removeEventListener("keyup", upHandler);
      };
   }, []);
   return keyPressed;
}