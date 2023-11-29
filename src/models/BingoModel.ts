import mongoose from 'mongoose';
import { connect, disconnect } from './index';
import { Bingo } from '../interfaces/Bingo';

const BingoSchema = new mongoose.Schema({
});

const BingoModel = mongoose.model('Bingo', BingoSchema);
    
const BingoFunctions = {

    createBingo: async function(Bingo: Bingo) {
        await connect();
        const newBingo = new BingoModel(Bingo);
        const result = await newBingo.save();
        disconnect();
        return result;
    },

    getBingos: async function(userId: number) {
        await connect();
        const Bingos = await BingoModel.find().populate('user');
        disconnect();
        return Bingos;
    },

    getBingo: async function(BingoId: number) {
        await connect();
        const Bingo = await BingoModel.findById(BingoId).populate('user');
        disconnect();
        return Bingo;
    },

    editBingo: async function(BingoId: number, Bingo: Bingo) {
        await connect();
        const newBingo = await BingoModel.findById(BingoId);
        if(newBingo == undefined || newBingo == null) {
            return false;
        }
        const result = await newBingo.save();
        disconnect();
        return result;
    }
}

export default BingoFunctions;