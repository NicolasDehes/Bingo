import * as express from "express";
import { BingoController } from "../controllers/BingoController";

const BingoRouter = express.Router();

// Application
BingoRouter.get('/Bingos/new', BingoController.BingoNew);
BingoRouter.get('/Bingos/:id', BingoController.BingoShow);

// API
BingoRouter.post('/api/Bingos', BingoController.BingoCreate);

export default BingoRouter;