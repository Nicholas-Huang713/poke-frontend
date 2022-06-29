import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [apiMsg, setApiMsg] = useState("");
  const baseUrl = "http://localhost:5000";

  useEffect(() => {
    const checkApiRoute = async () => {
      try {
        const resp = await axios(`${baseUrl}/`);
        console.log(resp.data.msg)
        setApiMsg(resp.data.msg);
      } catch (e) {
        setApiMsg("Oops, something went wrong...")
      }
    }
    checkApiRoute();
  }, []);

  return (
    <div>
      <h1>Pokemon Cards!</h1>
      {apiMsg}
    </div>
  );
}

export default App;
