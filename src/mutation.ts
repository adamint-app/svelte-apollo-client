import type { MutationOptions } from "@apollo/client/core/index.js";

export type MutateOptions<T = unknown, TVariables = unknown> = Omit<MutationOptions<T, TVariables>,
	"mutation">;
