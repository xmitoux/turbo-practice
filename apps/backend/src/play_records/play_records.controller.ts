import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreatePlayRecordDto } from './dto/create-play_record.dto';
import { UpdatePlayRecordDto } from './dto/update-play_record.dto';
import { PlayRecordsService } from './play_records.service';

@Controller('play-records')
export class PlayRecordsController {
  constructor(private readonly playRecordsService: PlayRecordsService) {}

  @Post()
  create(@Body() createPlayRecordDto: CreatePlayRecordDto) {
    return this.playRecordsService.create(createPlayRecordDto);
  }

  @Get()
  findAll() {
    return this.playRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playRecordsService.findOne(+id);
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
