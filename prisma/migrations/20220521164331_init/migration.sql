-- CreateTable
CREATE TABLE "Todo" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "task" TEXT,
    "checked" BOOLEAN NOT NULL,

    CONSTRAINT "Todo_pkey" PRIMARY KEY ("id")
);
