import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-20 flex justify-between items-center">
      <img className="w-44" src={LOGO_URL} alt="Netflix logo" />
      {user && (
        <div className="flex items-center gap-4">
          <button className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700">
            GPT Search
          </button>
          <img
            className="w-10 h-10 rounded"
            alt="User avatar"
            src="https://occ-0-2232-2186.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAAFGFzGNrVVKUbIWxDN8LFN3A1uPUoF9U4k0C6yzfq7IEiSB1wCeWdPyUWFnV_7y_aSWMJaXqW0l_Dn2gXxuVpS2X8Q6g0H.png?r=a41"
          />
          <button
            onClick={handleSignOut}
            className="py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
