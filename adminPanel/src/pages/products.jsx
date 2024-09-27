import React, { useEffect, useId } from 'react'
import { GetToken } from '../utils/token'
import { useDispatch, useSelector } from 'react-redux'
import {  GetMyProducts } from '../api/apiAsyncThunk'
import { Button, InputAdornment, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from '@mui/material'
import { CheckBox, Delete, Edit, Search } from '@mui/icons-material'

const Products = () => {

  const {myProducts} = useSelector((state)=>state.admin)
  const dispatch = useDispatch()
  const token = GetToken()
  useEffect(()=>{
    if(token){
      dispatch(GetMyProducts(token.sid))
    }
  },[dispatch])
  console.log(token.sid,"ID")
  console.log(myProducts,"My Products")
  return (
    <div className='p-[20px]'>
       <h1 className='flex justify-between items-center text-[32px]'>Orders <span><Button variant='contained'>+Add order</Button></span></h1>
      <div className='py-[20px] flex justify-between items-center'>
        <div className='flex items-center gap-[20px]'>
          <div>
            <TextField label="Search" size='' slotProps={{input:{endAdornment:(<InputAdornment position='end'><Search/></InputAdornment>)}}}/>
          </div>
          <div>
            <Select value="Newest">
              <MenuItem value="Newest">Newest</MenuItem>
              <MenuItem  value="Oldest">Oldest</MenuItem>
            </Select>
          </div>
        </div>
        <div>
          <Button><Edit/></Button>
          <Button><Delete/></Button>
        </div>
      </div>
      <div>
          <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell><CheckBox/>Products</TableCell>
                    <TableCell>Invertory</TableCell>
                    <TableCell>Category</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {myProducts?.map((el)=>{

                    return(
                    <TableRow key={el.id}>
                      <TableCell><div className='flex items-center gap-[20px]'><CheckBox/> <div><img   className='max-w-[100px]' src={import.meta.env.VITE_APP_IMAGE_URL+el.image} alt="" /></div>{el.productName}</div></TableCell>
                    </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
          </TableContainer>
        </div>
    </div>
  )
}

export default Products