import React,{useState} from 'react';
import Stack from '@mui/material/Stack';
// import {Fallback} from './Fallback'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useErrorHandler } from 'react-error-boundary';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const MAX_COUNTER_ALLOWED = 10

 const Counter = ()=>{
const [count , setCount] =useState(0);
const handleError= useErrorHandler();

const Fallback = ()=>{
  return <h1>Something went wrong!!!</h1>
}
const handleClick =()=>{
  try {
    if(count===MAX_COUNTER_ALLOWED){

      throw new Error("count limit at 10")

    }
    else {
      setCount( (c)=> c+1 )
    }
  }
  catch (e){
    console.log(e);
   handleError(e)
  }
}
const errorHandler = function (error: any, errorInfo: any) {
   console.log("logging",error,errorInfo)
}
   return( 
    <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      
      <Item>Count: {count}</Item>

      <Item><Button variant="contained" color="success" onClick={handleClick}>Increment</Button></Item>
     
    </Stack>
  </Box>


    )
}
export default Counter;