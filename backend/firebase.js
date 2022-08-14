// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import admin from 'firebase-admin';

import * as fireorm from 'fireorm';

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.FIRESTORE_KEY,

  authDomain: "node2-1ebc3.firebaseapp.com",

  projectId: "node2-1ebc3",

  storageBucket: "node2-1ebc3.appspot.com",

  messagingSenderId: "1075787595391",

  appId: "1:1075787595391:web:8d7a84f7735c75d31c094a",

  measurementId: "G-DQNTQ78Z06"

};


// Initialize Firebase

export const fireApp = initializeApp(firebaseConfig);

export const analytics = getAnalytics(fireApp);


// FireORM

import serviceAccount from './firestore.creds.json'assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
});

export const firestoreAdmin = admin.firestore();

export const fireormInit = fireorm.initialize(fireApp);