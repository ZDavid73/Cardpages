import { useDispatch } from "react-redux";
import AppRouter from "./routes/appRoutes";
import { useEffect, useMemo } from "react";
import { getAuthUserId } from "./utils/storage";
import { getUserInfo } from "./services/databaseService";
import { login } from "./features/auth/userSlice";

const App = () => {
    const dispatch = useDispatch();

    const userId = useMemo(() => getAuthUserId(), []);

    useEffect(() => {
        if (userId){
            getUserInfo(userId).then((user) => {
                if (user){
                    dispatch(login(user));
                }
            })
        }
    }, [userId, dispatch]);

    return (
        <AppRouter />
    );
}

export default App;