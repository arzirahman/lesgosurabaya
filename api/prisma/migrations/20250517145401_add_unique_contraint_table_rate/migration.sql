/*
  Warnings:

  - A unique constraint covering the columns `[post,email]` on the table `Rate` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rate_post_email_key" ON "Rate"("post", "email");
