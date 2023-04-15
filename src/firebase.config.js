import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDnfzE-Om3USlXC6bE-XU7hUMb_XXQzsGM",
  authDomain: "house-marketplace-14f79.firebaseapp.com",
  projectId: "house-marketplace-14f79",
  storageBucket: "house-marketplace-14f79.appspot.com",
  messagingSenderId: "131001991484",
  appId: "1:131001991484:web:146d566b595adc6b16de39",
  measurementId: "G-1GQ0DSF9RH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
