import uuid from "uuid";

export function getUniqueId(): string {
  return uuid.v1();
}
