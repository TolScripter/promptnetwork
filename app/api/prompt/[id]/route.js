import Prompt from "@/models/prompts";
import { connectToDB } from "@/utils/database";
import { NextResponse } from "next/server";

export async function PUT(request, {params}){
    try {
        await connectToDB();  
        const {id} = params;      
        const {prompt, tag, ppublic} = await request.json();

        await Prompt.findByIdAndUpdate(id, {prompt, tag, ppublic})
        return NextResponse({message: "Prompt updated!"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}

export async function DELETE(request,{params}){
    try {
        await connectToDB();  
        const {id} = params;
        await Prompt.deleteOne({id})
        return NextResponse({message: "Prompt deleted"}, {status: 200})
    } catch (error) {
        console.log(error);
    }
}

export async function GET(request, {params}){
    try {
        await connectToDB();  
        const {id} = params;
        
        const prompt = await Prompt.findOne({id});
        return NextResponse({prompt})
    } catch (error) {
        console.log(error);
    }
}