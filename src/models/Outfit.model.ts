import { model, Schema } from 'mongoose'
import { IOutfit } from '../@types/outfit';

const OutfitSchema: Schema = new Schema<IOutfit>({
  name: { type: String, required: true },
  type: { type: String, required: true },
  photos: { type: [Buffer], required: false }
});

export const Outfit = model<IOutfit>('outfits', OutfitSchema);