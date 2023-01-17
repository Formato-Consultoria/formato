import { NextApiRequest, NextApiResponse } from "next"
import { contentService } from "../../@types/services";

import { services } from "../../content/all-services";

export default async (req: NextApiRequest, res: NextApiResponse<contentService[]>) => {
    res.status(200).json(services);
}