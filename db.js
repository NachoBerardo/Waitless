import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/*(async () => {
    const response = await prisma.Food.create({
        data: {
            name: "Entraña",
            category: "Carnes",
            price: 2000,
            description: "La entraña a la parrilla es un suculento corte de carne que se destaca por su jugosidad y sabor intenso.",
            imagen: "",
            video: "",
        },
    })
    console.log(response);
})();*/

(async () => {
  const updateFood = await prisma.Food.update({ //updateMany
    where: {
      id: {
        contains: 0,
      },
    },
    data: {
      price: 3000,
      },
  })
  console.log(updateFood);
})();
