import { PrismaService } from '@/common/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { Post, Prisma } from '@repo/database';

import { PostCreateDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: PostCreateDto): Promise<Post> {
    return this.prisma.post.create({ data });
  }

  async delete(id: number): Promise<Post> {
    return this.prisma.post.delete({
      where: { id },
    });
  }

  async findAll(params: {
    cursor?: Prisma.PostWhereUniqueInput;
    orderBy?: Prisma.PostOrderByWithRelationInput;
    skip?: number;
    take?: number;
    where?: Prisma.PostWhereInput;
  }): Promise<Post[]> {
    const { cursor, orderBy, skip, take, where } = params;
    return this.prisma.post.findMany({
      cursor,
      orderBy,
      skip,
      take,
      where,
    });
  }

  async findOne(id: number): Promise<Post> {
    const post = await this.prisma.post.findUniqueOrThrow({
      include: {
        author: true,
      },
      where: { id },
    });

    return post;
  }

  async update(params: { data: Prisma.PostUpdateInput; where: Prisma.PostWhereUniqueInput }): Promise<Post> {
    const { data, where } = params;
    return this.prisma.post.update({
      data,
      where,
    });
  }
}
