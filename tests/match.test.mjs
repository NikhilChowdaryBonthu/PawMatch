import assert from "node:assert/strict";
import test from "node:test";
import { calculateMatchScore, filterDogs } from "../match.js";

test("small dogs receive the highest match score", () => {
  assert.equal(calculateMatchScore(["Milo", "Beagle", "Small", "Medium"]), 92);
});

test("medium-energy non-small dogs receive the balanced match score", () => {
  assert.equal(calculateMatchScore(["Nova", "Labrador Mix", "Large", "Medium"]), 86);
});

test("other listings receive the baseline match score", () => {
  assert.equal(calculateMatchScore(["Luna", "Australian Shepherd", "Medium", "High"]), 78);
});

test("invalid listings are handled safely", () => {
  assert.equal(calculateMatchScore(null), 0);
});

const luna = ["Luna", "Australian Shepherd", "Medium", "High", "Loyal and brilliant"];
const milo = ["Milo", "Beagle", "Small", "Medium", "Curious and friendly"];
const nova = ["Nova", "Labrador Mix", "Large", "Medium", "Gentle family companion"];
const dogs = [luna, milo, nova];

test("search is case-insensitive and returns the matching dog", () => {
  assert.deepEqual(filterDogs(dogs, { query: "nOvA" }), [nova]);
});

test("size and energy filters work together", () => {
  assert.deepEqual(filterDogs(dogs, { size: "Small", energy: "Medium" }), [milo]);
  assert.deepEqual(filterDogs(dogs, { size: "Large", energy: "High" }), []);
});

test("a filtered card index resolves within the visible results", () => {
  const visibleDogs = filterDogs(dogs, { query: "Nova" });
  assert.equal(visibleDogs[0], nova);
  assert.notEqual(visibleDogs[0], dogs[0]);
});
