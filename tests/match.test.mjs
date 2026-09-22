import assert from "node:assert/strict";
import test from "node:test";
import { calculateMatchScore } from "../match.js";

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
