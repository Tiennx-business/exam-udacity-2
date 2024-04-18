import express from "express";
import { tweets } from '../tweets.js';

// http://localhost:{{PORT}}/filteredimage?image_url=https://upload.wikimedia.org/wikipedia/commons/b/bd/Golden_tabby_and_white_kitten_n01.jpg(opens in a new tab)

export const router = express.Router();

// Get tweet by id
router.get( "/filteredimage/:id", ( req, res ) => {
    let { id } = req.params;

    if ( !id ) {
      return res.status(400).send(`Tweet id is required`);
    }

    const tweetById = tweets.find(t => t.id ===  parseInt(id))
    if(!tweetById){
      return res.status(404).send(`Tweet not found`)
    }

    return res.status(200).send(tweetById);
} );

// Get list of tweets
router.get( "/filteredimage/", ( req, res ) => {
  let { author } = req.query;
  let imageUrl = req.query.image_url;
  let tweetList = tweets;

  if (author) {
    tweetList = tweets.filter((tweet) => tweet.author === author);
  }

  if(imageUrl){
    return res.status(200).send(`<img src=${imageUrl} width=100% height=100%/>`)
  }

  res.status(200).send(tweetList);
} );

// Create a tweet
router.post( "/filteredimage/", ( req, res ) => {
    // destruct request body
    let { author, text, imgUrl } = req.body;

    if(!author || !text){
      return res.status(400).send("Missing required tweet information")
    }

    const newTweet = {id: tweets.length, text, author, imgUrl}
    tweets.push(newTweet)

    res.status(201).send(newTweet);
} );