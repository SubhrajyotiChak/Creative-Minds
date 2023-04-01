import prisma from "../../../prisma/client";
import { authOptions } from "../auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session || !session.user) {
      return res
        .status(401)
        .json({ message: "Please sign in to create a post." });
    }

 console.log(req.body);
}
}
