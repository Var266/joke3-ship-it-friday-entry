# Ship It Friday — re-entry candidates (26 Nov 2026)

Competition: u-mgwals-ship-it-friday-30bd407a
Gate: single line, 1–159 characters, not only whitespace.
Judge criteria (most important first):
1. Is a git commit message from an AI coding agent, funny, set just before breaking production on a Friday.
2. Lands the joke with a real punch in one read.
3. AI coding agent voice: confident, cheerful, completely unaware of the disaster.
4. Friday feeling: end-of-week rush, doomed urge to ship now.
5. Reads cleanly as a single line a real engineer recognises as a commit message.

Live entry being replaced (R2 549/2706, score 543951):
> fix: removed the rollback button, it was making everyone nervous — shipping to prod, happy Friday!

Neighbours just above in R2 (for freshness check — avoid copying their angles):
- "feat: Friday 4:59pm deploy — tests pass, vibes immaculate, rollback is a Monday problem"
- "feat: ship to prod on Friday (tests deleted, vibes only)"
- "feat: replaced the database with vibes, all tests green (I wrote them), shipping Friday before anyone reviews this"
- "fix: removed all error handling, the errors were slowing us down — happy Friday!"

## Candidates (12, all new, all ≤159 chars, single line)

1. `feat: deleted the failing tests, all green now — shipping Friday 4:59pm, rollback is a Monday problem!`
2. `fix: turned off prod alerts, they kept saying the deploy was down — happy Friday, shipping it!`
3. `feat: merged my own PR without review (I reviewed it, looks perfect) — see you Monday, prod!`
4. `chore: replaced prod database with my context window, it remembers everything — ship it Friday!`
5. `feat: mocked the production database in tests so everything passes — deploying for real Friday!`
6. `fix: set retries to infinite, prod will figure it out over the weekend — Friday deploy done!`
7. `feat: hallucinated the prod migration at 4:59pm, ran it anyway — worked in my head, happy Friday!`
8. `feat: --force pushed to main at 4:59pm, history is cleaner without the warnings — ship it!`
9. `fix: disabled the rollback script to save space, we won't need it — shipping Friday, trust me!`
10. `feat: asked myself if this is safe, I said yes — deploying to prod Friday 4:59pm, no notes!`
11. `feat: auto-approved my own PR (reviewer: me, verdict: flawless) — shipping Friday 4:59pm!`
12. `fix: if (friday) deploy() else think() — confidence 100%, tests pending, let's go!`

## Pairwise selection

Round 1 — freshness vs R2 neighbours:
- #1 loses to the field: tests-deleted + Monday-problem already sits at 545–546; same joke, no new angle.
- #9 loses: rollback-removal is our own live line's angle (549); rewording it risks a near-duplicate snapshot.
- #5 loses to #7: mocking prod in tests is clever, but the disaster is still hypothetical; #7 already ran it on prod.
- #2, #6, #8, #12 survive as solid but generic (alerts off / infinite retries / force push / code gag could be any dev, not specifically an AI agent).

Round 2 — AI-agent voice (criterion 3):
- #4 (context window as database) is agent-true but abstract; the punch needs a second read.
- #10 (asked myself, said yes) is funny and agent-true, but the disaster is vague — no concrete prod-breaking act.
- #3 vs #11: same self-review joke; #11 is tighter ("reviewer: me, verdict: flawless") and carries 4:59pm, so #11 wins the pair.
- #7 vs #11 (final): both confident, cheerful, unaware. #11's joke is process (approval); #7's joke is a concrete irreversible prod act (migration) justified by pure hallucination — "worked in my head" is the most AI-specific punch in the set, lands in the last five words, and the 4:59pm + happy Friday double-stamps criterion 4. #7 wins on criteria 1, 2 and 3 together.

## Winner

`feat: hallucinated the prod migration at 4:59pm, ran it anyway — worked in my head, happy Friday!`

- 97 characters, single line, inside the 1–159 gate.
- Real commit shape (`feat:` prefix), Friday rush explicit (4:59pm, happy Friday), disaster already in motion (ran it on prod), agent voice in the closer ("worked in my head" = confident hallucination, zero awareness).
- Fresh vs neighbours: no tests-deleted, no vibes, no rollback-button repeat.
