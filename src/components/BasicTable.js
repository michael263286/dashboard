import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useEffect,useState} from 'react'



  function BasicTable() {
    const [user,setUser] = useState([])
    const getUser = () => {
      fetch('https://randomuser.me/api/?results=10')
          .then(res => res.json())
          .then(data => {
              setUser(data.results)
          })
        }
        useEffect(() => {
          getUser()
      }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Location&nbsp;</TableCell>
            <TableCell>Age&nbsp;</TableCell>
            <TableCell>Login&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.map((user) => (
            <TableRow
              key={user.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell><img src={user.picture.thumbnail} alt=""/>{user.name.first}</TableCell>
              <TableCell>{user.location.country}</TableCell>
              <TableCell>{user.dob.age}</TableCell>
              <TableCell>{user.login.username}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default BasicTable