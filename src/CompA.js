import React from 'react'
import CompB from './CompB'
export default function compa(props) {
  return (
    <div>
      compa
      <CompB name={props.name}/>
    </div>
  )
}
