import { Schema, models, model } from "mongoose";


const PromptSchema = new Schema(
    {
        prompt:{
            type: String,
            required: [true, "The prompt field is required!"]
        },
        tags:{
            type: String,
            required: [true, "The tags field is required!"]
        },
        ppublic:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
)

const Prompt = models.Prompt || model('Prompt', PromptSchema)
export default Prompt