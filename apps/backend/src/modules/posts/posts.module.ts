import { PrismaService } from '@/common/services/prisma.service';
import { Module } from '@nestjs/common';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PrismaService, PostsService],
})
export class PostsModule {}
