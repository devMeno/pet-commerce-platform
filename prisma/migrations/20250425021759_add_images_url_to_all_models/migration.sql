/*
  Warnings:

  - Added the required column `animalImagesUrl` to the `Animal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `productImagesUrl` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `profilImageUrl` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Animal" ADD COLUMN     "animalImagesUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "productImagesUrl" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "profilImageUrl" TEXT NOT NULL;
