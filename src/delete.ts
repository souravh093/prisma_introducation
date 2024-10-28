import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
    // const result = await prisma.post.delete({
    //     where: {
    //         id: 1,
    //     }
    // })

    const result = await prisma.post.deleteMany({
        where: {
            title: 'title 2'
        },
    })

    console.log(result)
}

deleteData()