import { useEffect, useState} from 'react';
import {doc, getDoc} from 'firebase/firestore';
import {db} from 'libs/firebase';
//import {AppBar} from 'components/appbar'


function UserProfile(props){
    // read a single doc from a collection
    const [userProfile, setUserProfile] = useState(null)
    const [output, setOutput] = useState('is working')

    useEffect(()=>{

        async function getFirestoreDoc(){
            const docRef = await doc(db, 'user', 'jimf')
            const docData = await getDoc(docRef)

            // docData.data()

            setOutput(docData.data())
        }
        getFirestoreDoc()
    }, [])

    return userProfile
}

export {userProfile}

