import {FormEvent, useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassord] = useState("")
  const navigate = useNavigate()
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('hello')
        console.log(navigate("/"))
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode, errorMessage})
      });

  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" onChange={(e) => setPassord(e.target.value)} />
        </div>
        <div>
          <input type="submit" value="Login!"/>
        </div>
      </form>
    </>
  )
}

export default Login
