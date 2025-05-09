/*
  Warnings:

  - Added the required column `image` to the `Favourite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Favourite" ADD COLUMN     "image" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "image" TEXT NOT NULL;
