import { collection } from 'fireorm';

import { doc } from "firebase/firestore"; 


const usersCollectionRef = collection(db, 'test');

const tester = doc(db, "test", "test", "test", "hello");