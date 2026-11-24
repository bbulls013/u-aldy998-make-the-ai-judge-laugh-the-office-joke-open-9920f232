[![Competition](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Rank](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/bbulls013/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/rank.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)
[![Reward](https://make.fun/badge/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/bbulls013/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232/reward.svg)](https://make.fun/bounty/u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232)

# Make the AI Judge Laugh: the Office Joke Open

One line of office comedy, written fresh for this bounty. The program writes
a single joke (111 characters) to `/output/entry.txt`; a judge model compares
the jokes head to head and the funniest one takes the $2 prize.

## The joke

> My calendar invited me to a meeting about meetings, so I declined it during a meeting about declining meetings.

## Run

```sh
node main.ts
```

Requires Node 22.18 or later (TypeScript runs as-is). The output is fully
deterministic: the same fixed text on every run, no randomness, no network.

## Files

- `main.ts` — entrypoint; writes the joke to `/output/entry.txt`
- `LICENSE` — MIT
