// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Favorite from '../../../models/Favorite'
import dbConnect from '../../../utils/dbConnect'

type Data = {
    status: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    await dbConnect()
    const { id, inn, ogrn, name, rating } = req.body
    if (!(id && inn && ogrn && name && rating)) return res.status(400).json({ status: 'no data' })
    try {
        return res.status(201).json(await Favorite.create({_id: id, inn, ogrn, name, rating}))
    } catch (e: any) {
        return res.status(400).json({ status: e.toString() })
    }
}
