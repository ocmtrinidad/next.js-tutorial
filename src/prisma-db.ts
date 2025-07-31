import { PrismaClient } from "./generated/prisma";

const prisma = new PrismaClient();

async function seedProducts() {
  const count = await prisma.product.count();
  if (count === 0) {
    await prisma.product.createMany({
      data: [
        { title: "Product 1", price: 500, description: "Description 1" },
        { title: "Product 2", price: 700, description: "Description 2" },
        { title: "Product 3", price: 1000, description: "Description 3" },
      ],
    });
  }
}

seedProducts();

export async function getProducts() {
  return prisma.product.findMany();
}

export async function getProduct(id: number) {
  return prisma.product.findUnique({
    // Can be written as just { id }
    where: {
      id: id,
    },
  });
}

export async function addProduct(
  title: string,
  price: number,
  description: string
) {
  return prisma.product.create({
    data: {
      title: title,
      price: price,
      description: description,
    },
  });
}

export async function updateProduct(
  id: number,
  title: string,
  price: number,
  description: string
) {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: {
      title: title,
      price: price,
      description: description,
    },
  });
}
