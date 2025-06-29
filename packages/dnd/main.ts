import { OpenAiClient, OpenAiLanguageModel } from "@effect/ai-openai"
import { FetchHttpClient } from "@effect/platform"
import * as Config from "effect/Config"
import * as Effect from "effect/Effect"
import * as Layer from "effect/Layer"
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
