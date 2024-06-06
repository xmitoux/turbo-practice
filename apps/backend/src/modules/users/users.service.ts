import { PrismaService } from '@/common/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  async delete(id: number): Promise<User> {
    return this.prisma.user.delete({
      where: { id },
    });
  }

  async findAll(params: { orderBy?: Prisma.SortOrder; where?: string }): Promise<User[]> {
    const { orderBy, where } = params;
    return this.prisma.user.findMany({
      orderBy: { id: orderBy },
      where: {
        email: { endsWith: where },
      },
    });
  }

  async findOne(id: number): Promise<User> {
    return this.prisma.user.findUniqueOrThrow({
      include: {
        posts: {
          select: {
            content: true,
            title: true,
          },
        },
      },
      where: { id },
    });
  }

  async update(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
      data,
      where: { id },
    });
  }
}
