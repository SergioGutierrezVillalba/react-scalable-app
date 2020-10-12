import { useState } from "react";
import { useParams } from "react-router-dom";

const RANDOM_NAME_API_URL = "https://randomuser.me/api/";

function useName() {
  const [name, setName] = useState("");
  const { id } = useParams();

  const getName = () => {
    fetch(RANDOM_NAME_API_URL)
      .then((res) => res.json())
      .then((res) => setName(res.results[0].name.first));
  };

  return { name, getName, id };
}

export default useName;
