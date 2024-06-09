import { PartialType } from '@nestjs/mapped-types';

import { CreatePlayRecordDto } from './create-play_record.dto';

export class UpdatePlayRecordDto extends PartialType(CreatePlayRecordDto) {}
