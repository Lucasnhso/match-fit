import mongoose from "mongoose";
import { Outfit } from "./src/models/Outfit.model"
import { readFileSync } from 'node:fs';

mongoose.connect('mongodb://localhost:27017/match-outfits')

const file  = readFileSync('./files/teste1.jpg')

console.log(file);
async function main (){
  // const outfits = await Outfit.find({})
  // console.log('outfit', outfits)
  await Outfit.insertMany([{
    name: 'test',
    type: 'test',	
    photos: [file],
  }])
}
main()