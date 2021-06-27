import { auth, provider } from "../firebase";
import db from "../firebase";

export function signInApi() {
  return () => {
    auth
      .signInWithPopup(provider)
      .then((payload) => {
        console.log(payload);
      })
      .catch((error) => alert(error.message));
  };
}
