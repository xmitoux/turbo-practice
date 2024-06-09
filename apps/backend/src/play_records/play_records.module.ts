import { PrismaService } from '@/common/services/prisma.service';
import { Module } from '@nestjs/common';

import { PlayRecordsController } from './play_records.controller';
import { PlayRecordsService } from './play_records.service';

@Module({
  controllers: [PlayRecordsController],
  providers: [PrismaService, PlayRecordsService],
})
export class PlayRecordsModule {}
