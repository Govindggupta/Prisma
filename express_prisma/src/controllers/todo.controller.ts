import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const create = async (req: Request, res: Response) => {
  try {
    const { title, description, userId } = req.body;

    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        userId,
      },
    });

    res.status(200).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, description, userId } = req.body;
    
    const newTodo = await prisma.todo.create({
      data: {
        title,
        description,
        userId,
      },
    })
    
    res.status(200).json(newTodo);
    
  } catch (error) {
    res.status(500).json({ message: "internal error", error });
  }
};

export const getAll = async (req: Request, res: Response) => {
    try {
        
        const {userId} = req.params;
        const numericUserId = Number(userId);

        
        if (isNaN(numericUserId)) {
            return res.status(400).json({ error: 'Invalid userId. It must be a number.' });
        }

        const todos = await prisma.todo.findMany({
            where: {
                userId : numericUserId
            }
        });
    } catch (error) {
        
    }
};
