import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

    (async () => {
        await prisma.food.create({
            data: {
                name: "",
                category: "",
                price: "",
                description: "",
                imagen: "",
                video: "",
            },
        });
    })();
