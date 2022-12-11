import React, {useEffect, useState} from "react";

function useKeyPress(targetKey, ctrlRequired) {
   const [keyPressed, setKeyPressed] = useState(false);

   function downHandler(e) {
      if (e.ctrlKey) e.preventDefault();
      if (e.keyCode === targetKey) {
         if (!ctrlRequired || (ctrlRequired && e.ctrlKey)) setKeyPressed(true);
      }
   }

   const upHandler = ({ keyCode }) => {
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

export default useKeyPress;