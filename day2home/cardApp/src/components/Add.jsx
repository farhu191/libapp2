import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const [page,setpage]=useState('movie')
    const [count,setcount]=useState(0)
    const[form,setform]=usestate({name:'',
        email:'',
        password:'',
        address:'',

    }
        
    )
    function valueCap(e){
        console.log(e)
        setform({...form,[e.target.name]:e.target.value})
    }
  return (
  <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <h1>welcome to{page} page</h1>
    <div>
      <TextField
        required
        id="outlined-required"
        label="name"
        name='name'
        onChange={valueCap}
      />
      </div>
      <div>
      <TextField
        
        id="outlined-disabled"
        label="email"
        name='email'
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        name='password'
      />
      </div>
      <div>
      <TextField
        id="outlined-read-only-input"
        label="address"
        name='address'
    
        />
          
          </div>
          </Box>
  )
}

export default Add