//TS-tipagem estatic- traz inteligencia, e evita erros. 
import cors from "@fastify/cors";
import Fastify from "fastify";
import { appRoutes } from "./routes";

const app = Fastify();

app.register(cors,{
    origin: true,
});
app.register(appRoutes);

app.listen({
    port: 3333,
    host:'0.0.0.0',
}).then((url) => {
    console.log("http server running")
})