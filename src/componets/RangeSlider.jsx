import { Slider } from "@mui/material";
import React from 'react'

function RangeSlider({minValue=10,maxValue=100,values=[minValue,maxValue],onValueChange}) {
  return (
    <div>
      <Slider min={minValue} max={maxValue} value={values}  valueLabelDisplay="off"  onChange={(e,newValue)=>onValueChange(e,newValue)} />
      <div className="flex justify-between">
        <span>{values[0]}</span>
        <span>{values[1]}</span>
      </div>
    </div>
    
  )
}

export default RangeSlider