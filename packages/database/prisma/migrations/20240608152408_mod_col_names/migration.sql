/*
  Warnings:

  - You are about to drop the column `fileName` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `fileUrl` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `playTime` on the `play_records` table. All the data in the column will be lost.
  - Added the required column `file_name` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `play_time` to the `play_records` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "images" DROP COLUMN "fileName",
DROP COLUMN "fileUrl",
ADD COLUMN     "file_name" TEXT NOT NULL,
ADD COLUMN     "file_url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "play_records" DROP COLUMN "playTime",
ADD COLUMN     "play_time" INTEGER NOT NULL;
