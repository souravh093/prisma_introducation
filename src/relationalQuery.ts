import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const relationalQuery = async () => {
  // fluent api
  // const result = await prisma.user
  //   .findUnique({
  //     where: {
  //       id: 2,
  //     },
  //   })
  //   .profile();

  // relational filters
  const publishedPostsFilter = await prisma.user.findMany({
    include: {
      post: {
        where: {
          published: false
        }
      }
    }
  })

  console.dir(publishedPostsFilter, {depth: Infinity}); // check inside array of objects
};

relationalQuery();
