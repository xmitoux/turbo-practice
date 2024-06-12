import { PrismaService } from '@/common/services/prisma.service';
import { Injectable } from '@nestjs/common';
import { Image } from '@repo/database';

import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService) {}
  create(data: CreateImageDto): Promise<Image> {
    return this.prisma.image.create({ data });
  }

  findAll() {
    return `This action returns all images`;
  }

  findOne(id: number): Promise<Image> {
    return this.prisma.image.findUniqueOrThrow({
      include: {
        playRecords: true,
      },
      where: { id },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }
}
