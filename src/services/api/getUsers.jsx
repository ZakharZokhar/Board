import axios from 'axios';
import authHeader from './auth-header';
import {useEffect, useState} from "react";

const GetUsers = () => {
  const [data, setData] = useState('');
  const apiUrl = 'http://173.212.214.70:3004/users';
  useEffect( () => {
    axios.get(apiUrl, authHeader()).then((resp) => {
      const arr = Object.values(resp.data);
      setData(arr)
    });
  }, []);
  return (
data
  )
};

export default GetUsers;
