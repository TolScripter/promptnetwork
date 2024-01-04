import Prompt from "@/models/prompts";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    try {
        await connectToDB();  
        const {id} = params;      
        const {prompt, tag, ppublic, userId} = await request.json();

        await Prompt.findByIdAndUpdate(id, {prompt, tag, ppublic, userId})
        return NextResponse.json({message: "Prompt updated!"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(request,{params}){
    try {
        await connectToDB();  
        const {id} = params;
        await Prompt.deleteOne({_id: id})
        console.log('deleted')
        return NextResponse.json({message: "Prompt deleted"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}

export async function GET(request, {params}){
    try {
        await connectToDB();  
        const {id} = params;
        const prompt = await Prompt.findOne({_id:id});
        return NextResponse.json({prompt})
    } catch (error) {
        console.log(error);
    }
}