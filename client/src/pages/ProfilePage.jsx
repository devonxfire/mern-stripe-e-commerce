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
    <div className="bg-gradient-to-r from-red-800 to-red-950 min-h-screen">
      <button
        onClick={handleSignout}
        className="uppercase p-3 text-white bg-slate-950 rounded-lg hover:opacity-80 mt-6 w-[12rem] hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Signout
      </button>
    </div>
  );
}
