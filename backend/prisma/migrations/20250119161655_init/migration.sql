/*
  Warnings:

  - You are about to drop the `userDetails` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "userDetails";

-- CreateTable
CREATE TABLE "userAuth" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "userAuth_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userAuth_email_key" ON "userAuth"("email");

-- CreateIndex
CREATE UNIQUE INDEX "userAuth_username_key" ON "userAuth"("username");
