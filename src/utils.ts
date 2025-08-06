import type { Type } from "./api/hooks"

export const typesString = (types?: Type[]) => {
  return types?.map((type) => type.type.name).join(", ")
}
