import userAtom from "../atoms/userAtom";
import { useSetRecoilState } from "recoil";
import useShowToast from "./useShowToast";

const useLogout = () => {
	const setUser = useSetRecoilState(userAtom);
	const showToast = useShowToast();

	try {
		localStorage.removeItem("user_id");
		setUser(null);
	} catch (error) {
		showToast("Error", error, "error");
	}
};

export default useLogout;
