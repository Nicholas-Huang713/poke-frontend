import {useEffect} from 'react';
// import {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
  // const [userList, setUserList] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(process.env.NODE_ENV)
  useEffect(() => {
    const checkApiRoute = async () => {
      try {
        // const resp = await axios(`/api`);
        const resp = await axios(`${apiUrl}/`);
        console.log(resp.data)
        // setUserList(resp.data);
      } catch (e) {
        // setUserList("Oops, something went wrong...")
        console.log("error")
      }
    }
    checkApiRoute();
  }, [apiUrl]);

  return (
    <div>
      <h1>Hello!</h1>
      {/* <ul>
        {userList.length > 0 && userList.map((user) => (
          <li>
            {user.firstname} - {user.lastname} - {user._id}
          </li>
        ))}

      </ul> */}
    </div>
  );
}

export default App;
