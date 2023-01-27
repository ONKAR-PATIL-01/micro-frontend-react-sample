import React,{useState} from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 const Counter = ()=>{
const [count , setCount] =useState(0);

   return( 
    <Box sx={{ width: '100%' }}>
    <Stack spacing={2}>
      <Item>Count: {count}</Item>
      <Item><Button variant="contained" color="success" onClick={()=> setCount(count + 1)}>Increment</Button></Item>
     
      
    </Stack>
  </Box>


    )
}
export default Counter;