import ollama from "ollama";

export default defineEventHandler(async () => {
  return await ollama.list();
});
