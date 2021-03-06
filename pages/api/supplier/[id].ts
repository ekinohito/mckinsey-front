import type { NextApiRequest, NextApiResponse } from 'next'
import Supplier from '../../../models/Supplier'
import { OptResponse } from '../../../typings/Response'
import { SupplierDoc } from '../../../typings/Supplier'
import dbConnect from '../../../utils/dbConnect'

type Data = SupplierDoc
export type SupplierResponse = OptResponse<Data, string>

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SupplierResponse>
) {
    await dbConnect()
    try {
        const supplier = await Supplier.findById(req.query.id)
        if (!supplier) {
            res.status(200).json({
                status: 'error',
                data: 'no such id'
            })
        } else {
            res.status(200).json({
                status: 'ok',
                data: supplier
            })
        }
    } catch (e: any) {
        res.status(200).json({
            status: 'error',
            data: 'incorrect id'
        })
    }
}