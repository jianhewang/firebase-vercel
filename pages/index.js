// import { useEffect, useState} from 'react';
// import {doc, getDoc} from 'firebase/firestore';
// import {db} from 'libs/firebase';
// //import {AppBar} from 'components/appbar'

// function UserProfile({age, fullName, address, ...props}{
//     return(
//         <ul>
//             <li>{fullName}</li>
//             <li>{age}</li>
//             <li>{address}</li>
//         </ul>
//     )
// })

// function index(props){
//     // read a single doc from a collection
//     const [userProfile, setUserProfile] = useState(null)
//     const [output, setOutput] = useState('is working')

//     useEffect(()=>{

//         async function getFirestoreDoc(){
//             const ref = collection(db, 'users')
//             const userSnapshot = await getDoc(ref)
//             let users = []

//             userSnapshot.forEach(doc => {
//                 // object and array non mutating methods of stat
//                 //users.push(doc.data()) 
//                 setUsers(doc.data())            
//             });
//         }
//         getFirestoreDoc()
//     }, [])

//     if (userProfile){
//         return <div><UserProfile {...userProfile}/></div>
//     }
//     else{
//         return <div>{output}</div>
//     }

//     return (
//         <div>Index page</div>
//     )
// }

// export default index



import Link from 'next/link'

function index(props) {

return (<Link href="/login"><a>Login</a></Link>)



}



export default index