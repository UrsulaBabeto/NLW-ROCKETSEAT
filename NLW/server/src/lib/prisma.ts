import { PrismaClient } from "@prisma/client";


export const prisma = new PrismaClient({  //conexao com banco de dados
log:['query']

})