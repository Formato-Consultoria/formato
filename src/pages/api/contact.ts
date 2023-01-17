import type { NextApiRequest, NextApiResponse } from 'next'
import { PropValuesForm } from '../../@types/form'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<PropValuesForm[]>
) {
    res.status(200).json({ ...req.body })
}