import { Request, Response } from 'express';
import BingoFunctions from '../models/BingoModel';
import { Bingo } from '../interfaces/Bingo';

export const BingoController = {
    BingoNew: (req: Request, res: Response) => {
        const returnData = {
            titre: " | Bingo"
        };
        res.render('Bingo', returnData);
    },
    BingoShow: (req: Request, res: Response) => {
        const returnData = {
            titre: " | Bingo"
        };
        res.render('Bingo', returnData);
    },
    BingoCreate: async(req: Request, res: Response) => {
        const newBingo: Bingo = {content: req.body.content, createdAt: new Date(), user: null};
        const result = await BingoFunctions.createBingo(newBingo);
        if(result) {
            res.status(200).json(result);
        } else {
            res.status(500).json({ error: "Bingo could not be created" });
        }
    }
};