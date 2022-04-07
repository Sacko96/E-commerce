import React, { forwardRef } from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  input: {
    backgroundColor: '#fff',
    height:'50px',
  }
}))

const PhoneInput = (props, ref) => {
  const classes = useStyles()

  return (

    <TextField
      {...props}
      InputProps={{
        className: classes.input
      }}
      inputRef={ref}
      fullWidth
      size='small'
      label='Téléphone'
      variant='outlined'
      name='phone'
    />
  )
}
export default forwardRef(PhoneInput)