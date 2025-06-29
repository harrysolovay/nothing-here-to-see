import * as AiLanguageModel from "@effect/ai/AiLanguageModel"
import * as Console from "effect/Console"
import * as Effect from "effect/Effect"

export const root = Effect.gen(function*() {
  const model = yield* AiLanguageModel.AiLanguageModel
  const { text } = yield* model.generateText({
    prompt: "Generate a synopsis describing the landscape and core tensions of a fictional, magic story world.",
  })
  yield* Console.log(text)
})
