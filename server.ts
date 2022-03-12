import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 8000 
app.use((ctx) => {
  ctx.response.body = "Hello World!";
});
console.log(`Server running in port ${port}`);
await app.listen({ port: 8000 });