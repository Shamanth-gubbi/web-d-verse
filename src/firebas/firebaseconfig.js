import { initializeApp } from "firebase/app";
// import { getfirestore } from "firebase/firestore";
import  {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAP4hVUdK-DbA-a-32McJZ-geLWxQTn5q0",
  authDomain: "web-d-verse.firebaseapp.com",
  projectId: "web-d-verse",
  storageBucket: "web-d-verse.appspot.com",
  messagingSenderId: "148768810247",
  appId: "1:148768810247:web:41ae57a20c0b0514fc11a2",
  measurementId: "G-D2BPBMJB09"
};



const app = initializeApp(firebaseConfig);

const auths =  getAuth(app);
// const db = getfirestore(app);
// export {auths, db};

const provider = new GoogleAuthProvider()

export const signin = ()=>
{
    auths.signInWithPopup(provider).then((result)=>{
        console.log(result);

    }).catch((e)=>{
        console.log(e);
    })
}