/*
  Warnings:

  - You are about to drop the `app_user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "app_user";

-- CreateTable
CREATE TABLE "userDetails" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "userDetails_email_key" ON "userDetails"("email");
