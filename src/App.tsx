import { useDispatch } from "react-redux";
import AppRouter from "./routes/appRoutes";
import { useEffect } from "react";
import { getAuthUserId } from "./utils/storage";
import { getUserInfo } from "./services/databaseService";
import { login } from "./features/auth/userSlice";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const userId = getAuthUserId();
        if (userId){
            getUserInfo(userId).then((user) => {
                if (user){
                    dispatch(login(user));
                }
            })
        }

        console.log('hola')
    }, [dispatch]);

    return (
        <AppRouter />
    );
}

export default App;