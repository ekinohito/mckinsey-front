import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const FavoriteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for org.'],
    },
    ogrn: {
        type: String,
        required: [true, 'Please provide ogrn for org.'],
        unique: [true, 'OGRN should be unique'],
    },
    inn: {
        type: String,
        required: [true, 'Please provide inn for org.'],
        unique: [true, 'INN should be unique'],
    },
})
FavoriteSchema.plugin(uniqueValidator)

export default mongoose.models.Favorite || mongoose.model<typeof FavoriteSchema>('Favorite', FavoriteSchema)
