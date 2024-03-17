export default interface IChatContext {
  role: "user" | "assistant" | "system";
  content: string;
}
