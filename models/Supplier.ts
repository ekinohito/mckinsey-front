import mongoose from 'mongoose'

const SupplierSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for org.'],
    },
    ogrn: {
        type: String,
        required: [true, 'Please provide a name for org.'],
    },
    inn: {
        type: String,
        required: [true, 'Please provide a name for org.'],
    },
})

export default mongoose.models.Supplier || mongoose.model('Supplier', SupplierSchema)
