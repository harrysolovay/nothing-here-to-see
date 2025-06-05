import { AiLanguageModel } from "@effect/ai"
import { Console, Effect } from "effect"

export const root = Effect.gen(function*() {
  const model = yield* AiLanguageModel.AiLanguageModel
  const { text } = yield* model.generateText({
    prompt: "Generate a synopsis describing the landscape and core tensions of a fictional, magic story world.",
  })
  yield* Console.log(text)
})
