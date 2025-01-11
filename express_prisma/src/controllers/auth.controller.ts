import { Request, Response } from "express";
import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (req : Request, res: Response) => {
    try {
        const {username, password, firstName, lastName, email} = req.body;

        const userCreated = await prisma.user.create({
            data : {
                username, 
                email, 
                password, 
                firstName, 
                lastName
            }
        })
    } catch (error) {
        res.status(500).json({message : "error occurred", error})
    }
};