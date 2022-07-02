import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  const [userList, setUserList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const checkApiRoute = async () => {
      try {
        // const resp = await axios(`/api`);
        const resp = await axios(`${apiUrl}/users`);
        console.log(resp.data)
        setUserList(resp.data);
      } catch (e) {
        setUserList("Oops, something went wrong...")
      }
    }
    checkApiRoute();
  }, [apiUrl]);

  return (
    <div>
      <h1>Hello Pokemon Cards!</h1>
      <ul>
        {userList.map((user) => (
          <li>
            {user.firstname} - {user.lastname} - {user._id}
          </li>
        ))}

      </ul>
    </div>
  );
}

export default App;
