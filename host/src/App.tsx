import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Counter from "remote/Counter";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const App = () => (
 
  <div className="container">
   
      <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        <Item>Name: host</Item>
        <Item>Framework: react</Item>
        <Item>Language: TypeScript</Item>
        <Item>I am from another frontend</Item>

      </Stack>
    </Box>
    <Counter ></Counter>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
