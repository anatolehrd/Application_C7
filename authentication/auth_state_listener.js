import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        const uid = user.id;
        //...
    } else {
        //User is signed out
        // ...
    }
});

