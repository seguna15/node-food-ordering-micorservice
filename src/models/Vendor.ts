import mongoose, {Schema, Document, Model, mongo} from "mongoose";

interface VendorDoc extends Document {
    name: string;
    ownerName: string;
    foodType: [string];
    pinCode: string;
    address: string;
    phone: string;
    email: string;
    password: string;
    salt: string;
    serviceAvailability: boolean;
    coverImage: string;
    rating: number;
    //foods: any;
}

const vendorSchema = new Schema({
    name: {type: String, required: true},
    ownerName: {type: String, required: true},
    foodType: {type: [String]},
    pinCode: {type: String, required: true},
    address: {type: String},
    phone: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    salt: {type: String, required: true},
    serviceAvailability: {type: Boolean},
    coverImage: {type: String },
    rating: {type: Number },
    /* foods: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "food"
    }]  */
},{
    timestamps: true
});

const Vendor = mongoose.model('vendor', vendorSchema);

export { Vendor}