import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

// Inline the schema to avoid path alias issues in Vercel serverless functions
const insertContactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = insertContactSchema.parse(req.body);

    // In-memory acknowledgement (no DB required for portfolio)
    const contact = {
      id: Date.now(),
      name: input.name,
      email: input.email,
      message: input.message,
      createdAt: new Date().toISOString(),
    };

    console.log("[Vercel] Contact received:", contact);
    return res.status(201).json(contact);
  } catch (err) {
    if (err instanceof z.ZodError) {
      return res.status(400).json({
        message: err.errors[0].message,
        field: err.errors[0].path.join("."),
      });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
}
