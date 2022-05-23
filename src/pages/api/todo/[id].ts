import { PrismaClient } from '@prisma/client';
import { GetStaticPaths } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  switch (req.method) {
    case 'GET':
      const getTodo = await prisma.todo.findMany({
        where: { id: Number(id) },
      });
      res.status(200).json(getTodo);
      break;

    case 'PUT':
      try {
        const { reqData } = req.body;
        const result = await prisma.todo.update({
          where: { id: Number(reqData.id) },
          data: {
            title: reqData.title,
            task: reqData.task,
            checked: reqData.checked,
          },
        });
        res.json(result);
      } catch (error) {
        res.json({ error });
      }
      break;

    case 'DELETE':
      try {
        const { id } = req.body;
        const result = await prisma.todo.delete({
          where: {
            id: Number(id),
          },
        });
        res.json(result);
      } catch (error) {
        res.json({ error });
      }
      break;

    default:
      res.status(405).end();
      break;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prisma = new PrismaClient();
  const allTodo = await prisma.todo.findMany();

  const pageNumber = allTodo.map((todo) => ({ params: { id: todo.id.toString() } }));

  return {
    paths: pageNumber,
    fallback: false,
  };
};
