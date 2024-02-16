import { useDispatch } from "react-redux";
import {
  signoutStart,
  signoutSuccess,
  signoutFailure,
} from "../redux/user/userSlice";

export default function ProfilePage() {
  const dispatch = useDispatch();

  const handleSignout = async () => {
    try {
      dispatch(signoutStart());

      const response = await fetch("http://localhost:3000/api/auth/signout");

      const data = response.json();

      if (response.ok) {
        dispatch(signoutSuccess());
      } else {
        dispatch(signoutFailure(data.error));
      }
    } catch (error) {
      dispatch(signoutFailure(error.message));
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={handleSignout}>Signout</button>
    </div>
  );
}
