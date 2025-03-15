import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
export default function SignIn() {
  const logGoogleUser = async () => {
    const resonse = await signInWithGooglePopup();
    console.log(resonse);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Pop</button>
    </div>
  );
}
