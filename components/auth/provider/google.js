// import Image from 'next/image';

// import { ProviderButton } from "../../ui/button/styles";
// import google from './../../../public/artwork/images/google.png';

// function GoogleProvider ({children, ...props}){
//     // auth with Google
//      return(
//         <ProviderButton>
//           <Image 
//           src={google} 
//           alt="google logo"
//           layout="fixed"
//           width={20}
//           height={20}
//           />
//            {children}
//         </ProviderButton>
//      )
// }

// export default GoogleProvider

import Image from 'next/image'

import {ProviderButton} from 'components/ui/buttons'
import google from './google.png'


function GoogleProvider ({label, ...props}){

    return (
       <ProviderButton>
         <Image
         src={google}
         layout="fixed"
         width={24}
         height={24}
         />
         <span>{label || "sign up with google"}</span>
       </ProviderButton>
    )
}

export default GoogleProvider
