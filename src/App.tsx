import { useDispatch, useSelector } from "react-redux";
import AppRouter from "./routes/appRoutes";
import { useEffect, useMemo } from "react";
import { getAuthUserId } from "./utils/storage";
import { getUserInfo } from "./services/databaseService";
import { login } from "./features/auth/userSlice";
import { AppState } from "./types/stateType";
import { fetchAllTournaments } from "./features/tournamentSlice";

const App = () => {
    const dispatch = useDispatch();
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