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

/** Return the dogs shown by the search and size/energy filters, in display order. */
export function filterDogs(dogs, { query = "", size = "", energy = "" } = {}) {
  const search = query.trim().toLowerCase();
  return dogs.filter((dog) => {
    const searchable = dog.slice(0, 5).some((value) =>
      String(value ?? "").toLowerCase().includes(search)
    );
    return searchable && (!size || dog[2] === size) && (!energy || dog[3] === energy);
  });
}
