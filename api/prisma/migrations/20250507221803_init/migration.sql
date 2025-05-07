-- CreateTable
CREATE TABLE "Records" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Positions" (
    "id" SERIAL NOT NULL,
    "waldo" JSONB NOT NULL,
    "wizard" JSONB NOT NULL,
    "wilma" JSONB NOT NULL,
    "odlaw" JSONB NOT NULL,
    "woof" JSONB NOT NULL,

    CONSTRAINT "Positions_pkey" PRIMARY KEY ("id")
);
