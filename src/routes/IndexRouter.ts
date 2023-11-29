import * as express from "express";
import { IndexController } from "../controllers/IndexController";

const TweetRouter = express.Router();

// Application
TweetRouter.get('/tweets', IndexController.tweetFeed);
TweetRouter.get('/tweets/new', IndexController.tweetNew);
TweetRouter.get('/tweets/:id', IndexController.tweetShow);

// API
TweetRouter.post('/api/tweets', IndexController.tweetCreate);

export default TweetRouter;