import { Router } from "express";

export default (pool: any) => {
  const router = Router();

  // GET
  router.get("/", async (req, res) => {
    try {
      const result = await pool.query("SELECT * FROM products");
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ error: "Something went wrong buddy" });
    }
  });



    // GET signups (if you would like to check)
    router.get("/interests", async (req, res) => {
      try {
        const result = await pool.query("SELECT * FROM interests");
        res.json(result.rows);
      } catch (err) {
        res.status(500).json({ error: "Something went wrong buddy" });
      }
    });

  // POST
  router.post("/interests", async (req, res) => {
    const { email, product_id } = req.body;

    try {
      const result = await pool.query(
        "INSERT INTO interests (email, product_id) VALUES ($1, $2) RETURNING *",
        [email, product_id]
      );
      res.status(201).json(result.rows[0]);
    } catch (err) {
      res.status(500).json({ error: "Something went wrong buddy" });
    }
  });

  return router;
};
