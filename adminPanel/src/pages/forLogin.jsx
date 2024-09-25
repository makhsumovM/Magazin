import { TextField } from '@mui/material'
import React from 'react'
import { axiosRequest } from '../utils/axiosRequest';
import { useNavigate } from 'react-router-dom';
import { GetToken, saveToken } from '../utils/token';

const ForLogin = () => {

    const navigate = useNavigate()

 async function handleLoginClick(e){
    e.preventDefault();
    const user = {
        userName:e.target["userName"].value,
        password: e.target["password"].value,
    }
    console.log(user)
    try {
        const {data} = await axiosRequest.post('/Account/login',user)
        if(data.statusCode == 200){
            console.log("Success")
            saveToken(data.data)
            GetToken(data.data)
            navigate("/layout")
        }
    } catch (error) {
        console.error(error)
    }
 }

  return (
    <div className='flex'>
        <form action="" onSubmit={handleLoginClick}>
            <TextField placeholder='userName' name='userName'/>
            <TextField placeholder='password' name='password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default ForLogin


// async function handleLoginClick(e){
//     e.preventDefault();
//     const user = {
//       userName:e.target["userName"].value,
//       password: e.target["password"].value,
//     }
//     console.log(user)
//     try {
//       const {data} = await axiosRequest.post('/Account/login',user)
//       console.log(data)
//       if(data.statusCode == 200)
//         {
//           saveToken(data.data)
//           getToken(data.data)
//           navigate("/")
  
//         }
//     } catch (error) {
//       console.error(error)
//     }
//   }
  