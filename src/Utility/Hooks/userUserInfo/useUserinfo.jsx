import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "../UseAuth/useAuth";

const useUserinfo = () => {
  const { user } = useAuth();
  const {
    data: userInfo,
    isLoading,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["useInfo", user],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:5001/getUser?userEmail=${user.email}`
      );
      return response.data;
    },
  });

  return { userInfo, isLoading, isPending, refetch };
};

export default useUserinfo;
