import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const updates = async () => {
    // const update = await prisma.post.update({
    //     where: {
    //         id: 8
    //     },
    //     data: {
    //         title: "Title 1 to update",
    //         content: "Content 1 to Update",
    //         author: "Author 1 to update"
    //     }
    // })

    // console.log(update)

    // const updateMany = await  prisma.post.updateMany({
    //     where: {
    //         title: "title 1"
    //     },
    //     data: {
    //         published: true
    //     }
    // })

    const upsertData = await prisma.post.upsert({
        where: {
            id: 20
        },
        update: {
            title: "UPdated title upsert 20"
        },
        create: {
            title: "title 9",
            content: "content 9"
        }
    })

    console.log(upsertData)
}

// updates();