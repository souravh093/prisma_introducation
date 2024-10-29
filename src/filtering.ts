import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const filtering = async () => {
  // and Filtering
  //   const andFiltering = await prisma.post.findMany({
  //     where: {
  //       AND: [
  //         {
  //           title: {
  //             contains: "Title"
  //           },
  //         },
  // {
  //     published: false,
  // }
  //       ],
  //     },
  //   });

  //   OR filtering
  //   const orFiltering = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: "Title",
  //           },
  //         },
  //         {
  //           published: false,
  //         },
  //       ],
  //     },
  //   });

  // NOT filtering
//   const notFiltering = await prisma.post.findMany({
//     where: {
//       NOT: [
//         {
//           title: {
//             contains: "Title",
//           },
//         },
//       ],
//     },
//   });


//   const startWithFiltering = await prisma.post.findMany({
//     where: {
//         content: {
//             startsWith: 'c'
//         }
//     },
//   });

//   const endWithFiltering = await prisma.post.findMany({
//     where: {
//         title: {
//             // endsWith: 'd'
//             equals: 'Title 2'
//         }
//     },
//   });

const users = ['sourav21', 'sourav24', 'sourav25'];

const userNameByArray = await prisma.user.findMany({
    where: {
        username: {
            in: users
        }
    }
})

  console.dir(userNameByArray, { depth: Infinity });
};

filtering();
