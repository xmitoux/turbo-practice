import { Injectable } from '@nestjs/common';

import { CreatePlayRecordDto } from './dto/create-play_record.dto';
import { UpdatePlayRecordDto } from './dto/update-play_record.dto';

@Injectable()
export class PlayRecordsService {
  create(createPlayRecordDto: CreatePlayRecordDto) {
    return 'This action adds a new playRecord';
  }

  findAll() {
    return `This action returns all playRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} playRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} playRecord`;
  }

  update(id: number, updatePlayRecordDto: UpdatePlayRecordDto) {
    return `This action updates a #${id} playRecord`;
  }
}
