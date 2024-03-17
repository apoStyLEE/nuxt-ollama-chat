import ollama from "ollama";

export default eventHandler(async (event) => {
  const chatContextString = await readBody(event);
  const query = getQuery(event);

  const messages = JSON.parse(chatContextString);

  const response = await ollama.chat({
    model: query["model"]?.toString() ?? "llama2:latest",
    messages: messages,
    stream: true,
  });

  const stream = new ReadableStream({
    async pull(controller) {
      const { value, done } = await response.next();
      if (done) {
        controller.close();
      } else {
        controller.enqueue(value.message.content);
      }
    },
  });

  return sendStream(event, stream);
});
