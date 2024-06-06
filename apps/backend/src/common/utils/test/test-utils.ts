import type { INestApplication } from '@nestjs/common';
import type { Prisma } from '@prisma/client';

import { PrismaClientExceptionFilter } from '@/common/filters/prisma-client-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

import { prisma } from './setup-e2e';

export const resetTable = async (modelNames: Prisma.ModelName[], schemaId: string): Promise<void> => {
  const tablenames = modelNames.map(modelName => convertModelNameToTableName(modelName));

  for (const tablename of tablenames) {
    try {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${schemaId}"."${tablename}" RESTART IDENTITY CASCADE;`);
    }
    catch (error) {
      console.log({ error });
    }
  }
};

const convertModelNameToTableName = (modelName: Prisma.ModelName): string => {
  const snakeCase = modelName
    .replaceAll(/([A-Z])/g, '_$1')
    .toLowerCase()
    .replace(/^_/, '');

  return `${snakeCase}s`;
};

export const setupTestingModule = async (app: INestApplication): Promise<INestApplication> => {
  app.useGlobalPipes(
    new ValidationPipe({
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      whitelist: true,
    }),
  );

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaClientExceptionFilter(httpAdapter));

  await app.init();

  return app;
};
