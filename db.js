import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async () => {
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
})();
