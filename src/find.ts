import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

    // find data
    // const getData = await prisma.post.findMany();

    // // find first and find fist or throw error
    // const findFirst = await prisma.post.findFirstOrThrow({
    //     where: {
    //         id: 4
    //     }
    // })

    // find unique and find unique or throw error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            id: 20
        },
        select: {
            title: true,
            content: true,
            author: true,
        }
    })

    console.log(findUnique)
}

main();