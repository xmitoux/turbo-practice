import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { PrismaService } from '@/common/services/prisma.service';

@Module({
    controllers: [UsersController],
    providers: [PrismaService, UsersService],
})
export class UsersModule {}
