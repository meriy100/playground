import {Link} from "react-router-dom";
import {useAuthContext} from "../context/AuthContext.tsx";
import {getAuth} from "firebase/auth";

function Home() {
  const currentUser = useAuthContext()

  const onSignOut = () => {
    const auth = getAuth()
    auth.signOut().then(() => console.log("Sign out!"))
      .catch(error => {
        console.log({error})
      })
  }

  return (
    <div>
      <h1>Hello World</h1>
      { currentUser ? (
        <div>
          <p>{currentUser.email}</p>
          <button onClick={onSignOut}>Logout</button>
        </div>
      ): <Link to="login">Login</Link>
      }
    </div>
  )
}

export default Home