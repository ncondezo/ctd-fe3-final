import React from "react";
import useInput from './utils/useInput'
import { useState } from "react";


const Form = () => {

  const name = useInput('text')
  const mail = useInput('text')
  const [valid, setValid] = useState()

  
  const handleUser = (e) => {
    e.preventDefault()
    if(name.value.length > 3 && mail.value.length > 6 && email.value.includes('@')){
      setValid(true)
    }else{
      setValid(false)
    }
}



  return (
    <div>
      <form onSubmit = {handleUser}>
      <input {...name} />
        <input {...mail} />
        <button>Send</button>
      </form>
    </div>
  );
};

export default Form;
