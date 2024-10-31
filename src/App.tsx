import { useDispatch } from "react-redux";
import AppRouter from "./routes/appRoutes";
import { useEffect, useMemo } from "react";
import { getAuthUserId } from "./utils/storage";
import { getUserInfo } from "./services/databaseService";
import { login } from "./features/auth/userSlice";
import { fetchAllTournaments } from "./features/tournamentSlice";
import { AppDispatch } from "./store/store";

const App = () => {
    const dispatch = useDispatch<AppDispatch>();
    const userId = useMemo(() => getAuthUserId(), []);

    //PENDIENTE: hacer ese mundo de fetchs en otro archivo y llamarlo desde acá

    useEffect(() => {
        dispatch(fetchAllTournaments())
    }, )

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