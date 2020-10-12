import { useState } from "react";
import utils from "../../../utils";

function useApp() {
  const [total, setTotal] = useState(0);

  const addOne = () => {
    setTotal((total) => utils.sum(total, 1));
  };

  const substractOne = () => {
    setTotal((total) => utils.substract(total, 1));
  };

  return { total, addOne, substractOne };
}

export default useApp;
