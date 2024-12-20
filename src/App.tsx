import { useDispatch } from "react-redux";
import AppRouter from "./routes/appRoutes";
import { useEffect, useMemo } from "react";
import { getAuthUserId } from "./utils/storage";
import { getUserInfo } from "./services/databaseService";
import { login } from "./features/auth/userSlice";
import { AppDispatch } from "./store/store";
import DataSync from "./components/DataSync/DataSync";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
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
        <>
        <DataSync/>
        <AppRouter />
        </>
    );
}

export default App;