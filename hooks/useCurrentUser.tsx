import axios from "axios";
import { useEffect, useState } from "react";

function useCurrentUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/local/api/auth/session");
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { user, loading };
}

export default useCurrentUser;
