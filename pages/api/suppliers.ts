// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { OptResponse } from '../../typings/Response'
import { Supplier } from '../../typings/Supplier'
import { sleep } from '../../utils/sleep'

type Data = Supplier[]
export type SuppliersResponse = OptResponse<Data, null>
type Query = { goodType?: string, useCache?: 'true' | 'false' }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<SuppliersResponse>
) {
    const { goodType, useCache } = req.query as Query
    console.log({useCache})
    if (useCache === 'false') {
        await sleep(10000)
    }
    res.status(200).json({
        status: 'ok',
        data: [
            {
                inn: '7712040126',
                ogrn: '1027700092661',
                name: 'ПАО "АЭРОФЛОТ"',
            },
            {
                inn: '7712040127',
                ogrn: '1027700092661',
                name: 'ПАО "АЭРОФЛОТ"',
            },
            {
                inn: '7712040128',
                ogrn: '1027700092661',
                name: 'ПАО "АЭРОФЛОТ"',
            }
        ]
    })
}
