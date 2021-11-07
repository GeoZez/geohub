import { ObjectId } from 'mongodb'
import { GameSettingsType, GuessType, LocationType } from '../../types'

type Game = {
  id?: ObjectId;
  mapId: string;
  mapName?: string;
  userId: ObjectId;
  userAvatar: string;
  gameSettings: GameSettingsType;
  rounds: LocationType[];
  guesses: GuessType[];
  round: number;
  totalPoints: number;
  totalDistance: number;
}

export default Game