import { Request, Response } from "express";
import {  PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const register = async (req : Request, res: Response) => {
    try {
        const {username, password, firstName, lastName, email} = req.body;

        const existingUsername = await prisma.user.findUnique({
            where : { username }
        });
        if (existingUsername) {
            res.status(409).json({message: "username already taken"});
        }

        const existingEmail = await prisma.user.findUnique({
            where : { email }
        });
        if (existingEmail) {
            res.status(409).json({message: "email already registered"});
        }

        const userCreated = await prisma.user.create({
            data : {
                username, 
                email, 
                password, 
                firstName, 
                lastName
            }
        })
        res.status(200).json(userCreated);
    } catch (error) {
        res.status(500).json({message : "error occurred", error})
    }
};

