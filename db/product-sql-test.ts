import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient, Prisma } from '@/lib/generated/prisma';
import sampleData from './sample-data';

const prisma = new PrismaClient().$extends(withAccelerate());

const getProducts1 = async () => {
  // const products = await prisma.product.findMany();
  const products = await prisma.$queryRaw`
    select * from "Product" 
  `;
  console.log(JSON.stringify(products));
};

const getProducts2 = async (brand: any) => {
  // const products = await prisma.product.findMany();
  const products = await prisma.$queryRaw`
    select * from "Product"  where brand = ${brand}
  `;
  console.log(JSON.stringify(products));
};

const getProducts3 = async (brand: any) => {
  // const products = await prisma.product.findMany();
  // const products = await prisma.$queryRaw`
  //   select * from "Product"  where brand = ${brand}
  // `;

  let query = Prisma.sql`select * from "Product"  where brand = ${brand}`;

  const products = await prisma.$queryRaw(query);
  console.log(JSON.stringify(products));
};

async function main() {
  // await getProducts1();
  // await getProducts2('Polo');
  await getProducts3('Polo');
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async (error) => {
    console.log(error);
    await prisma.$disconnect();
    process.exit(1);
  });
