// The Best Meal You Ever Had — make.fun entry.
// Writes one sentence (at most 200 characters) about the best meal
// ever had to /output/entry.txt. Deterministic: no network, no clock,
// no randomness — the same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Past midnight on a plastic stool at a Yogyakarta warung, a vendor ladled soto ayam over steaming rice, turmeric broth burning my tongue, and I ate three bowls while rain hammered the tin roof.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
