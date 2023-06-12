import mysql from 'mysql2'

import dotenv from 'dotenv'
dotenv.config()
const connection = mysql.createConnection(process.env.DATABASE_URL).promise()
console.log('Connected to PlanetScale!')

export async function getFood() {
  const [rows] = await pool.query("SELECT * FROM Food")
  return rows
}

export async function getFood(id) {
  const [rows] = await connection.query(`
  SELECT * 
  FROM Food
  WHERE id = ?
  `, [id])
  return rows[0]
}

export async function createFood(title, contents) {
  const [result] = await connection.query(`
  INSERT INTO Food (title, contents)
  VALUES (?, ?)
  `, [title, contents])
  const id = result.insertId
  return getFood(id)
}

export async function updateFood(title, contents,id) {
  const [result] = await connection.query(`
  UPDATE Food
  SET title = ?, contents = ?, created  = NOW() 
  where id = ?
  `, [title, contents,id])
  
  return getFood(id)
  }

export async function deleteFood(id) {
  const [result] = await connection.query(`
  DELETE FROM Food
  WHERE id = ?
  `, [id])
  return result.affectedRows > 0
}