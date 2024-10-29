import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (event) => {
  console.log(event);
});

const main = async () => {
  const getAllFromDB = await prisma.post.findMany();

  // console.log(getAllFromDB)
};

main();
