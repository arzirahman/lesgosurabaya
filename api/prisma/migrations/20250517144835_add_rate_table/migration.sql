-- CreateTable
CREATE TABLE "Rate" (
    "id" SERIAL NOT NULL,
    "post" TEXT NOT NULL,
    "rate" INTEGER NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Rate_pkey" PRIMARY KEY ("id")
);
