/*
  Warnings:

  - Changed the type of `time` on the `Records` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Records" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL;
