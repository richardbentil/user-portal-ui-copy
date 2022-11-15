import React from 'react'

function TextInput(props: any) {
  return (
    <input type={props.type} className="form-control" name={props.name} id={props.id} aria-describedby="helpId" placeholder={props.placeHolder} />
  )
}

export default TextInput