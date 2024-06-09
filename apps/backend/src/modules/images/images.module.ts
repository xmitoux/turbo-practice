import { PrismaService } from '@/common/services/prisma.service';
import { Module } from '@nestjs/common';

import { ImagesController } from './images.controller';
import { ImagesService } from './images.service';

@Module({
  controllers: [ImagesController],
  providers: [PrismaService, ImagesService],
})
export class ImagesModule {}
