import { ObjectId } from 'mongodb'
import { NextApiRequest, NextApiResponse } from 'next'
import { collections, getLocations, throwError } from '@backend/utils'
import { OFFICIAL_WORLD_ID } from '@utils/constants/random'

const createDailyChallenge = async (req: NextApiRequest, res: NextApiResponse) => {
  const locations = await getLocations(OFFICIAL_WORLD_ID)

  const newDailyChallenge = {
    mapId: new ObjectId(OFFICIAL_WORLD_ID),
    createdAt: new Date(),
    isDailyChallenge: true,
    mode: 'standard',
    gameSettings: {
      timeLimit: 180,
      canMove: true,
      canPan: true,
      canZoom: true,
    },
    locations,
  }

  const createResult = await collections.challenges?.insertOne(newDailyChallenge)

  if (!createResult) {
    return throwError(res, 400, 'Could not create new daily challenge')
  }

  res.status(201).send({
    challengeId: createResult?.insertedId,
  })
}

export default createDailyChallenge
