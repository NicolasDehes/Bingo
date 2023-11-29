import mongoose from 'mongoose';
import { connect, disconnect } from './index';
import { Index } from '../interfaces/Index';

const IndexSchema = new mongoose.Schema({
});

const IndexModel = mongoose.model('Index', IndexSchema);
    
const IndexFunctions = {

    createIndex: async function(Index: Index) {
        await connect();
        const newIndex = new IndexModel(Index);
        const result = await newIndex.save();
        disconnect();
        return result;
    },

    getIndexs: async function(userId: number) {
        await connect();
        const Indexs = await IndexModel.find().populate('user');
        disconnect();
        return Indexs;
    },

    getIndex: async function(IndexId: number) {
        await connect();
        const Index = await IndexModel.findById(IndexId).populate('user');
        disconnect();
        return Index;
    },

    editIndex: async function(IndexId: number, Index: Index) {
        await connect();
        const newIndex = await IndexModel.findById(IndexId);
        if(newIndex == undefined || newIndex == null) {
            return false;
        }
        newIndex.content = Index.content;
        const result = await newIndex.save();
        disconnect();
        return result;
    }
}

export default IndexFunctions;