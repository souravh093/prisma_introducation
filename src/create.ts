import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "sourav21",
  //       email: "souravh22@gmail.com",
  //       role: UserRole.admin,
  //     },
  //   });

  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is my bio",
  //       userId: 2,
  //     },
  //   });

  //   const createCategory = await prisma.category.create({
  //     data: {
  //       name: "Software Engineering",
  //     },
  //   });

  const createPost = await prisma.post.create({
    data: {
      title: "Title 2",
      content: "content 2 on the post",
      published: true,
      authorId: 1,
      postCategory: {
        // create: {
        //   //   category: {
        //   //     connect: {
        //   //       id: 1,
        //   //     },
        //   //   },
        //   categoryId: 3,
        // },

        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 4,
          },
          {
            categoryId: 3,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
