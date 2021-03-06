import type { NextApiRequest, NextApiResponse } from 'next'
import Supplier from '../../../models/Supplier'
import { OptResponse } from '../../../typings/Response'
import { Supplier as SupplierType } from '../../../typings/Supplier'
import dbConnect from '../../../utils/dbConnect'

type Data = {
    name: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<OptResponse<Data, string>>
) {
    await dbConnect()
    try {
        const supplierData = req.body as SupplierType
        const supplier = await Supplier.create(supplierData)
        if (!supplier) {
            res.status(200).json({
                status: 'error',
                data: 'no such id'
            })
        } else {
            res.status(200).json({
                status: 'ok',
                data: {
                    name: supplier.name
                }
            })
        }
    } catch (e: any) {
        res.status(200).json({
            status: 'error',
            data: e.toString()
        })
    }
}