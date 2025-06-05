import { OpenAiClient, OpenAiLanguageModel } from "@effect/ai-openai"
import { FetchHttpClient } from "@effect/platform"
import { Config, Effect, Layer } from "effect"
import { root } from "./root"

await root.pipe(
  Effect.provide(OpenAiLanguageModel.model("gpt-4o-mini")),
  Effect.provide(
    OpenAiClient
      .layerConfig({
        apiKey: Config.redacted("OPENAI_API_KEY"),
      })
      .pipe(Layer.provide(FetchHttpClient.layer)),
  ),
  Effect.runPromise,
)
