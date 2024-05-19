import express, { Request, Response } from "express";
import { addOrder, ensureTableExists } from "./service";

const app = express();
app.use(express.json());


//Ensure the table exists before starting the server
ensureTableExists().then(() => {
  console.log("Table ensured to exist");
});

// POST endpoint to handle JSON data
app.post("/orders", async (req: Request, res: Response) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).send("Invalid payload");
  }

  const filteredOrders = items.filter((order: any) => {
    return order.orderBlocks.every((block: any) => block.lineNo % 3 !== 0);
  });

  for (const order of filteredOrders) {
    await addOrder(order.orderID);
  }

  res.send("Orders processed and stored successfully");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});