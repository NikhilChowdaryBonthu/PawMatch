/**
 * Return PawMatch's transparent compatibility score for a dog listing.
 * The rules are intentionally simple and visible to users.
 */
export function calculateMatchScore(dog) {
  if (!Array.isArray(dog)) return 0;

  const [, , size, energy] = dog;
  if (size === "Small") return 92;
  if (energy === "Medium") return 86;
  return 78;
}
