import { Action, IAgentRuntime, Memory } from "@ai16z/eliza";

// import { evmPlugin } from "@ai16z/plugin-evm";

const customAction: Action = {
  name: "CUSTOM_ACTION",
  similes: ["SIMILAR_ACTION"],
  description: "Just for testing action",
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    // Validation logic
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory) => {
    // Implementation
  },
  examples: [],
};