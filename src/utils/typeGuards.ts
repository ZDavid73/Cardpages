import { Card, SellingCard } from "../types/cardTypes";
import { Deck } from "../types/deckTypes";
import { Tournament } from "../types/tournamentTypes";

function isTournament(details: Tournament | Deck | Card | null): details is Tournament {
    return (details as Tournament).location !== undefined;
  }
  
  function isDeck(details: Tournament | Deck | Card | null): details is Deck {
    return (details as Deck).cards !== undefined;
  }
  
  function isCard(details: Tournament | Deck | SellingCard | null): details is SellingCard {
    return (details as SellingCard).images !== undefined;
  }

export { isTournament, isDeck, isCard }