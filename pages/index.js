// import firebase from '../firebase'

// import NavBar from '../components/navbar'
// import Brand from './../components/branding'

// export default function Home() {
   
//   return (
//      <div>
//        <NavBar/>
//        <Brand title="Home Page" tagline="directory app start"/>

//      </div>
     
       
    
//   )
// }

import GoogleProvider from "../components/auth/provider/google";
import Button from "../components/ui/button";

function index (){
  return(
    <div>
      {/* <Button bgcolor="tomato">
        Signup with firebase
      </Button>

      <Button bgcolor="blue">
        Signup with firebase
      </Button>

      <Button bgcolor="orange">
        Signup with firebase
      </Button> */}

      <GoogleProvider></GoogleProvider>
    </div>
  )
}

export default index
