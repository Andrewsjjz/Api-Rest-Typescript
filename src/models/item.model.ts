import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ItemSchema = new Schema<Car>(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        type: {
            type: String,
            enum: ["sedan", "truck"],
            required: true
        },
        description: {
            type: String,
            required: true
        }

    },
    {
        timestamps: true,
        versionKey: false
    }
)

const ItemModel = model("items", ItemSchema)
export default ItemModel