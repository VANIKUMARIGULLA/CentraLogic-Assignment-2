import pool from "./pgConfig";

// Function to insert order IDs into the database
async function addOrder(orderID: string): Promise<any> {
  try {
    const query = "INSERT INTO orders (orderID) VALUES ($1)";
    const result = await pool.query(query, [orderID]);
    return result;
  } catch (err: any) {
    return err;
  }
}

// Function to check if the table exists, if not, create it
async function ensureTableExists(): Promise<void> {
  const query = `
    CREATE TABLE IF NOT EXISTS orders (
      id SERIAL PRIMARY KEY,
      orderID VARCHAR(255) NOT NULL
    )
  `;
  await pool.query(query);
}

export { addOrder, ensureTableExists };
