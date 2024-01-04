"use client";
import { useSession } from "next-auth/react";

export function userIsLoggedIn(){
    const {status} = useSession();

    return status;
}