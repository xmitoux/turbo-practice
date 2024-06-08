/*
  Warnings:

  - You are about to drop the column `endTime` on the `play_records` table. All the data in the column will be lost.
  - You are about to drop the column `startTime` on the `play_records` table. All the data in the column will be lost.
  - Added the required column `end_time` to the `play_records` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_time` to the `play_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "play_records" DROP COLUMN "endTime",
DROP COLUMN "startTime",
ADD COLUMN     "end_time" INTEGER NOT NULL,
ADD COLUMN     "start_time" INTEGER NOT NULL;
