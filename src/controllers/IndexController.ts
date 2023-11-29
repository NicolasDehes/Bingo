import { Request, Response } from 'express';
import IndexFunctions from '../models/IndexModel';

export const IndexController = {
    IndexNew: (req: Request, res: Response) => {
        const returnData = {
            titre: " | Index"
        };
        res.render('Index', returnData);
    },
    IndexShow: (req: Request, res: Response) => {
        const returnData = {
            titre: " | Index"
        };
        res.render('Index', returnData);
    },
    IndexCreate: async(req: Request, res: Response) => {
        const newIndex: Index = {content: req.body.content, createdAt: new Date(), user: null};
        const result = await IndexFunctions.createIndex(newIndex);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: "Index could not be created" });
        }
    }
};