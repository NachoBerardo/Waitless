//const mysql = require('../mysql2');
import mysql from 'mysql2';
import dotenv from 'dotenv'
import { prisma } from "../db.js"
//dotenv  = require ('../dotenv');
dotenv.config() 
// const connection = mysql.createConnection(process.env.DATABASE_URL).promise()
//console.log('Connected to PlanetScale!')

/*
export async function getAllFood()  {
  const [rows] = await connection.query("SELECT * FROM Food")
  return rows
}

*/
export const getAllFoodWithPrisma = async () => {
  try {
    const getFood = await prisma.food.findMany()

    if(!getFood) return console.log("not food found")

    return getFood
  } catch (error) {
    console.log(error)    
  }
}
/*
export async function getFood(id) {
  const [rows] = await connection.query(`
  SELECT * 
  FROM Food
  WHERE id = ?
  `, [id])
  return rows[0]
}
*/
export const getFoodWithPrisma = async (id) => {
  try {
    const getFood = await prisma.food.findUnique({
      where: {
        idFood: id
      }
    })

    if(!getFood) return console.log("not food found")

    return getFood
  } catch (error) {
    console.log(error)    
  }
}

/*
export async function createFood(title, contents) {
  const [result] = await connection.query(`
  INSERT INTO Food (title, contents)
  VALUES (?, ?)
  `, [title, contents])
  const id = result.insertId
  return getFood(id)
}
*/
export const createFoodWithPrisma = async (title, contents) => {
  try {
    const createFood = await prisma.food.create({
      data: {
        title: title,
        contents: contents
      }
    })

    if(!createFood) return console.log("not food found")

    return createFood
  } catch (error) {
    console.log(error)    
  }
}
/*
export async function updateFood(title, contents,id) {
  const [result] = await connection.query(`
  UPDATE Food
  SET title = ?, contents = ?, created  = NOW() 
  where id = ?
  `, [title, contents,id])
  
  return getFood(id)
  }
  */
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

    if(!updateFood) return console.log("not food found")

    return updateFood
  } catch (error) {
    console.log(error)    
  }
}
/*
export async function deleteFood(id) {
  const [result] = await connection.query(`
  DELETE FROM Food
  WHERE id = ?
  `, [id])
  return result.affectedRows > 0
}
*/
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

    if(!deleteFood) return console.log("not food found")

    return deleteFood
  } catch (error) {
    console.log(error)    
  }
}

