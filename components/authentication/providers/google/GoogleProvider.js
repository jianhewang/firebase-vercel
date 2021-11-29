import Image from 'next/image';

import { useRouter } from 'next/dist/client/router';
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import { auth } from 'libs/firebase';
import { useAuth } from 'libs/hooks/useAuth';

import { ProviderButton } from "ui/buttons";
import google from "./google.png";
import { useState } from 'react';


function GoogleProvider({ children,  ...props }) {
  const [isValidUser, setIsValidUser] = useState(null)
  // observer - remain null if no match user
  const user = useAuth();
  const router = useRouter();
  const provider = new GoogleAuthProvider();

  async function singIn(){
    setIsValidUser(await signInWithPopup(auth, provider))
  }

  function handleClick(){
    singIn()
  }

  if (isValidUser){
    router.push('/todo')
  }

  return (
    <ProviderButton onClick={ handleClick } {...props}>
      <div>
        <Image
          src={google}
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
