import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const useStyles = makeStyles({
  inputStyles: {
    paddingRight: "0 !important",
    fontSize: "1.5rem",
    borderRadius: "0.8rem",
  },
  textFieldStyle: {
    width: "100%",
    "& .MuiInputLabel-root": {
      fontSize: "1.5rem",
    },
    "& .MuiInputLabel-root:not(.Mui-focused)": {
      color: "#919EAB"
    }
  }
});


function CustomInput({ label="", helperText="", inputType="text", value, onChange }) {
  const classes = useStyles();

  const [passwordToggle, setPasswordToggle] = useState(false)

  return (
    <div style={{marginTop: "1rem"}}>
      {
        inputType === "password" ? 
        <TextField
          value={value}
          onChange={(e) => {onChange(e.target.value)}}
          className={classes.textFieldStyle}
          error={helperText !== ""}
          type={passwordToggle ? "text" : "password"}
          label={label}
          helperText={helperText}
          InputProps={{
            className: classes.inputStyles,
            endAdornment: <InputAdornment position={"start"}>
              <IconButton
                onClick={() =>setPasswordToggle(pre=>!pre)}
              >
                {passwordToggle ? <VisibilityOff style={{width:"2.4rem", height:"2.4rem"}} /> : <Visibility style={{width:"2.4rem", height:"2.4rem"}} />}
              </IconButton>
            </InputAdornment>
          }}
        />
        :
        <TextField
          value={value}
          onChange={(e) => {onChange(e.target.value)}}
          className={classes.textFieldStyle}
          error={helperText !== ""}
          type={inputType}
          label={label}
          helperText={helperText}
          InputProps={{className: classes.inputStyles}}
        />
      }
    </div>
  )
}

export default CustomInput