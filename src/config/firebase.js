
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyAGif8o90a5atl-uAyfUXnM0ku8U5F4-yI",
  authDomain: "chat-app-gs-f86b4.firebaseapp.com",
  projectId: "chat-app-gs-f86b4",
  storageBucket: "chat-app-gs-f86b4.firebasestorage.app",
  messagingSenderId: "905830857616",
  appId: "1:905830857616:web:98126401eec920f69bd115"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (username,email,password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth,email,password)
        const user = res.user;
        await setDoc(doc(db,"users",user.uid),{
            id:user.uid,
            username:username.toLowerCase(),
            email,
            name:"",
            avatar:"",
            bio:"Hey, There I am using chat app",
            lastSeen:Date.now()
        })
        await setDoc(doc(db,"chats",user.uid),{
            chatData:[]
        })
    } catch (error) {
        console.error(error)
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const login = async (email,password) => {
try {
    await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
    console.error(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
    }

}

const logout = async () => {
    try {
        await signOut(auth)
    } catch (error) {
      console.error(error);
      toast.error(error.code.split('/')[1].split('-').join(" "));  
    }
}

export {signup,login,logout,auth,db}


