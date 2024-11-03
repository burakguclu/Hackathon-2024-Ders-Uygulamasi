import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "hackathon-egitim.firebaseapp.com",
  projectId: "hackathon-egitim",
  storageBucket: "hackathon-egitim.appspot.com",
  messagingSenderId: "685389890735",
  appId: "1:685389890735:web:fa71717e51f0e94733405a"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);