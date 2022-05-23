import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      try {
        const { data } = req.body;
        await prisma.todo.create({
          data: {
            title: data.title,
            task: data.task,
            checked: false,
          },
        });
      } catch (error) {
        res.json({ error });
      }
    case 'GET':
      try {
        const result = await prisma.todo.findMany();
        const sort = result.sort((a, b) => (a.id < b.id ? -1 : 1));
        res.json(sort);
      } catch (error) {
        res.json({ error });
      }
  }
}
