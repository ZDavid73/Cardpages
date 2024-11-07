import { UserState } from "../features/auth/userSlice";
import { CardState } from "../features/cardSlice";
import { DeckState } from "../features/deckSlice";
import { ModalState } from "../features/modalSlice";
import { TournamentState } from "../features/tournamentSlice";

export interface AppState {
    user: UserState,
    modal: ModalState,
    tournaments: TournamentState,
    cards: CardState,
    decks: DeckState
}