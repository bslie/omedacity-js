import { findPlayerMatchesByPlayerIdWithClient } from "../api/player-matches";
import { OmedaCity } from "../types";

export class PlayerMatchesCollection {
  /**
   * Get a matches for a Player by Player Id
   * @param {string} playerId
   * @returns {Promise<OmedaCity.Player>}
   */
  getByPlayerId(
    options: OmedaCity.PlayerMatchesOptions
  ): Promise<OmedaCity.Match> {
    return findPlayerMatchesByPlayerIdWithClient(options);
  }
}
