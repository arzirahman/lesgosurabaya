-- AlterTable
ALTER TABLE "Favourite" ADD COLUMN     "hasDetail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isEvent" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Like" ADD COLUMN     "hasDetail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "isEvent" BOOLEAN NOT NULL DEFAULT false;
