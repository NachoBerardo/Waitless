//const mysql = require('../mysql2');
import dotenv from 'dotenv'
import { prisma } from "./db.js"
//dotenv  = require ('../dotenv');
dotenv.config()

export const getAllFoodWithPrisma = async (req, res) => {
  try {
    const getFood = await prisma.food.findMany()

    if (!getFood) return console.log("not food found")

    return res.json({ message: "Food found", data: getFood })
  } catch (error) {
    console.log(error)
  }
}

export const getAllOrdersWithPrisma = async (req, res) => {
  try {
    const getOrders = await prisma.order.findMany()

    if (!getOrders) return console.log("orders not found")

    return res.json({ message: "Orders found", data: getOrders })
  } catch (error) {
    console.log(error)
  }
}

export const getFoodWithPrisma = async (id) => {
  try {
    const getFood = await prisma.food.findUnique({
      where: {
        id: id
      }
    })

    if (!getFood) return console.log("not food found")

    return getFood
  } catch (error) {
    console.log(error)
  }
}

export const getOrderWithPrisma = async (id) => {
  try {
    const getFood = await prisma.order.findUnique({
      where: {
        id: id
      }
    })
    if (!getOrder) return console.log("order not found")
    return getOrder
  } catch (error) {
    console.log(error)
  }
}

export const createFoodWithPrisma = async (title, contents) => {
  try {
    const createFood = await prisma.pedido.create({
      data: {
        idpedido: idpedido,
        title: title,
        contents: contents
      }
    })

    if (!createFood) return console.log("not food found")

    return createFood
  } catch (error) {
    console.log(error)
  }
}
/*
export const createFoodWithPrisma = async (title, contents) => {
  try {
    const getFood = await prisma.order.findUnique({
      where: {
        id: id
      }
    })
    if (!getOrder) return console.log("order not found")
    return getOrder
  } catch (error) {
    console.log(error)
  }
}*/


export const updateFoodWithPrisma = async (title, contents, id) => {
  try {
    const updateFood = await prisma.food.update({
      where: {
        idFood: id
      },
      data: {
        title: title,
        contents: contents
      }
    })

    if (!updateFood) return console.log("not food found")

    return updateFood
  } catch (error) {
    console.log(error)
  }
}

export const deleteFoodWithPrisma = async (title, contents, id) => {
  try {
    const deleteFood = await prisma.food.delete({
      where: {
        idFood: id
      },
      data: {
        title: title,
        contents: contents
      }
    })

    if (!deleteFood) return console.log("not food found")

    return deleteFood
  } catch (error) {
    console.log(error)
  }
}

