import { PrismaService } from '@/common/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { PlayRecord } from '@prisma/client';

import { CreatePlayRecordDto } from './dto/create-play_record.dto';
import { UpdatePlayRecordDto } from './dto/update-play_record.dto';

@Injectable()
export class PlayRecordsService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePlayRecordDto): Promise<PlayRecord> {
    return this.prisma.playRecord.create({ data });
  }

  findAll() {
    return `This action returns all playRecords`;
  }

  findOne(id: number): Promise<PlayRecord> {
    return this.prisma.playRecord.findUniqueOrThrow({
      include: {
        image: true,
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} playRecord`;
  }

  update(id: number, updatePlayRecordDto: UpdatePlayRecordDto) {
    return `This action updates a #${id} playRecord`;
  }
}
