import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const pagination = async () => {
    // offset pagination
    // const offsetData = await prisma.post.findMany({
    //     skip: 5,
    //     take: 2
    // });

    const cursorData = await prisma.post.findMany({
        cursor: {
            id: 24
        },
        skip: 5,
        take: 2
    });

    console.log(cursorData)
}

pagination()