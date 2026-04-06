export type Choice = {
  message: {
    content: string;
  };
};

export type LLMOut = {
  choices?: Choice[];
};
