// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Favorite from '../../../models/Favorite'
import dbConnect from '../../../utils/dbConnect'

type Data = any

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect()
    try {
        return res.status(200).json(await Favorite.find())
    } catch (e: any) {
        return res.status(400).json({ status: e.toString() })
    }
}
