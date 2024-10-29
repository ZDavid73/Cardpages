import { UserState } from "../features/auth/userSlice";
import { ModalState } from "../features/modalSlice";

export interface AppState {
    user: UserState,
    modal: ModalState
}