import { FindOneParam } from '@/common/dto/find-one-param.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreatePlayRecordDto, CreatePlayRecordDtoRequest } from './dto/create-play_record.dto';
import { UpdatePlayRecordDto } from './dto/update-play_record.dto';
import { PlayRecordEntity } from './entities/play_record.entity';
import { PlayRecordsService } from './play_records.service';

@Controller('play-records')
export class PlayRecordsController {
  constructor(private readonly playRecordsService: PlayRecordsService) {}

  @Post()
  async create(@Body() createDtoRequest: CreatePlayRecordDtoRequest): Promise<PlayRecordEntity> {
    const { endTime, startTime } = createDtoRequest;
    const playTime = startTime + endTime;
    const createDto: CreatePlayRecordDto = { ...createDtoRequest, playTime };

    return new PlayRecordEntity(await this.playRecordsService.create(createDto));
  }

  @Get()
  findAll() {
    return this.playRecordsService.findAll();
  }

  @Get(':id')
  async findOne(@Param() { id }: FindOneParam): Promise<PlayRecordEntity> {
    return new PlayRecordEntity(await this.playRecordsService.findOne(id));
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playRecordsService.remove(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayRecordDto: UpdatePlayRecordDto) {
    return this.playRecordsService.update(+id, updatePlayRecordDto);
  }
}
