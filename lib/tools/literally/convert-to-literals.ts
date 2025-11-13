import { LiteralConversionOptions } from "./LiteralConversionOptions"

export function convertToLiterals(input: string, preferences: LiteralConversionOptions) {
  let literalList: string = input
  if (!input) {
    return literalList
  } else {
    //Replace newlines with a temporary delimiter
    literalList = literalList.replace(/\n/g, "|")
    //
  }
  if (preferences.wrapWithBraces) { 
    return "{" + literalList + "\n}"
  }
}


