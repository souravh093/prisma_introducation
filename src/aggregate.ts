import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  // find average age
  const avgAge = await prisma.user.aggregate({
    _avg: {
      age: true,
    },
  });

  // find some age
  const sumAge = await prisma.user.aggregate({
    _sum: {
      age: true,
    },
  });

  //   find count age fields we want to use the without number only count
  const countAge = await prisma.user.aggregate({
    _count: {
      username: true,
    },
  });

  // find the count of record
  const countRecord = await prisma.user.count();

  //   find the max age with aggregate function
  const findMax = await prisma.user.aggregate({
    _max: {
      age: true,
    },
  });

  //   find the minimum age
  const findMin = await prisma.user.aggregate({
    _min: {
      age: true,
    },
  });

  console.log(countAge);
};

aggregates();
