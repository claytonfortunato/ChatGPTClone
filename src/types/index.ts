export type chatType = {
  name: string;
  id: string;
  description: string;
  option: {
    model: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
  };
};
