import {FormEvent} from "react";

function Login() {
  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log('hello')

  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" />
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
        </div>
        <div>
          <input type="submit" value="Login!"/>
        </div>
      </form>
    </>
  )
}

export default Login
