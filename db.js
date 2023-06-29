import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

// (async () => {
//     const response = await prisma.food.create({
//         data: {
//             name: "Matambre",
//             category: "Plato principal",
//             price: 2500,
//             description: "Exquisito matambre argentino relleno y enrollado, servido con guarnición de temporada.",
//             image: "",
//             video: "",
//         },
//     })
//     console.log(response);
// })();

/*(async () => {
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
})();*/
