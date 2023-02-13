import React, { useEffect, useState } from "react";
import axios from "axios";

interface Joke {
  joke: string;
}

function App() {
  const [chuck, setChuck] = useState<Joke | null>(null);

  useEffect(() => {
    chuckFetch();
  }, []);
  const chuckFetch = async () => {
    const response = await axios.get<Joke>(
      "https://api.api-ninjas.com/v1/chucknorris?",
      { headers: { "X-Api-Key": "lZOkNRcxcRbTIitJ2BjLKw==7ukbxScp64NxhMke" } }
    );
    setChuck(response.data);
    console.log(chuck);
  };

  return <div>{chuck?.joke}</div>;
}

export default App;
