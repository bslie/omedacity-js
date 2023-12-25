import { OmedaCity } from "../types";
export declare class PlayerStatisticsCollection {
    /**
     * Get a Statistics for a Player by Player Id
     * @param {string} playerId
     * @returns {Promise<OmedaCity.PlayerStatistics>}
     */
    getByPlayerId(options: OmedaCity.PlayerStatisticsOptions): Promise<OmedaCity.PlayerStatistics>;
}