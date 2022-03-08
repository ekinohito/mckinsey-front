// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Supplier from '../../models/Supplier'
import { OptResponse } from '../../typings/Response'
import { SupplierDoc } from '../../typings/Supplier'
import dbConnect from '../../utils/dbConnect'
import { sleep } from '../../utils/sleep'

type Data = SupplierDoc[]
export type SuppliersResponse = OptResponse<Data, null>
type Query = { goodType?: string, useCache?: 'true' | 'false' }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SuppliersResponse>
) {
    const { goodType, useCache } = req.query as Query
    await dbConnect()
    const suppliers = await Supplier.find().sort({rating: -1})
    if (useCache === 'false') {
        await sleep(1000)
    }
    res.status(200).json({
        status: 'ok',
        data: suppliers
    })
}
