// https://projects.100xdevs.com/tracks/gZf9uBBNSbBR7UCqyyqT/prisma-1 
// refer this for everything written over here , or ask 3G 

// Auto generated client : this are the kind of classes/client generated by the prisma so that we can use table directly in code 
// i.e, user.create(), user.update(), and etc ...

// everytime there is a change in prisma file , we need to run these commands compulsory 
//1. npx prisma migrate dev --name <message> --> to migrate the data 
//2. npx prisma generate --> to generate the client 

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser ( email: string, firstName: string, lastName: string, password: string) {
    const res = await prisma.user.create({
        data:{
            email, 
            firstName,
            lastName, 
            password
        }
    })
    console.log(res);
}

// insertUser("hello.email", "firsttest", "lastnametest", "password");

// UPDATE the user 
interface updateParams {
    firstName: string;
    lastName: string;
}

async function updateUser (email: string , {firstName , lastName}: updateParams){
    const res = await prisma.user.update({
        data: {
            firstName, 
            lastName
        }, 
        where: {
            email
        }
    })
    console.log(res);
}

updateUser("hello.email", {firstName: "updatetest" , lastName: "lastnameUpdate"});
