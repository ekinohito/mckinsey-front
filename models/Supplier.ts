import mongoose from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const SupplierSchema = new mongoose.Schema({
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
    rating: {
        type: Number,
        required: [true, 'Please provide rating for org.'],
    },
    financeTotal: {
        type: String,
        required: true
    },
    financeStatus: {
        type: String,
        required: true
    },
    financeEfficiency: {
        type: String,
        required: true
    },
    financeCondition: {
        type: String,
        required: true
    },
    juridicalTotal: {
        type: String,
        required: true
    },
    juridicalTaxBehaviour: {
        type: String,
        required: true
    },
    juridicalHonesty: {
        type: String,
        required: true
    },
    juridicalDirector: {
        type: String,
        required: true
    },
    juridicalCourts: {
        type: String,
        required: true
    },
    experienceTotal: {
        type: String,
        required: true
    },
    experienceSize: {
        type: String,
        required: true
    },
    experienceStability: {
        type: String,
        required: true
    },
    experienceSustainability: {
        type: String,
        required: true
    },
    experienceSupplier: {
        type: String,
        required: true
    }
})
SupplierSchema.plugin(uniqueValidator)

export default mongoose.models.Supplier || mongoose.model<typeof SupplierSchema>('Supplier', SupplierSchema)
