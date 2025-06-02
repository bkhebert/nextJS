'use server'; // For server actions specifically, `use server` is required

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await prisma.post.create({
    data: {
      title,
      content,
    },
  })
}
