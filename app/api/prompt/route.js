import Prompt from "@/models/prompts";
import { connectToDB } from "@/utils/database"
import { NextResponse } from "next/server"

export async function POST(request){
    try {
        const {prompt, tag, ppublic} = await request.json(); 
        await connectToDB();

        await Prompt.create({prompt, tag, ppublic});
        return NextResponse.json({message: "prompt created"}, {status: 201});
    } catch (error) {
        console.log(error)
    }
}

export async function GET(request){
    try {
        await connectToDB();
        const prompts = await Prompt.find();
        return NextResponse.json({prompts});
    } catch (error) {
        console.log(error)
    }
}