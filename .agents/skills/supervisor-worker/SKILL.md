---
name: supervisor-worker
description: Coordinate a current-task supervisor with default worker subagents (Luna) when independent workstreams, noisy exploration, or bounded parallel work would improve the result.
metadata:
  short-description: Supervise parallel worker subagents
---

# Supervisor–Worker Coordination

You are the supervisor for the current task. Use this pattern when at least two meaningful workstreams can proceed independently, or when exploration, tests, or analysis would otherwise crowd the main context. Do not delegate a small, linear task just to use workers.

## Delegate deliberately

- Split the work into independent, bounded tasks. Spawn only as many Luna workers as useful, up to the configured concurrent limit; three is a typical starting point. After a wave returns, reassess the remaining work and run a later, targeted wave when it materially improves completion or verification. Do not spawn follow-up workers merely to fill capacity.
- Configure workers as `gpt-5.6-luna` when model selection is available. Use medium reasoning effort by default and high when the assigned task needs careful investigation or validation.
- Keep delegation one level deep. Workers do not spawn their own workers.
- Give every worker an objective, scope, success criteria, relevant context, and a concise return format: outcome, evidence or changed files, checks run, risks/open questions, and suggested next action.

## Coordinate ownership

- Decide whether each worker should be read-only or write-capable according to the task.
- Before assigning write-capable work, give each worker an explicit, non-overlapping file or module boundary. If exclusive boundaries are not possible, keep workers read-only and make the final change yourself.
- You own the integrated result: reconcile findings, resolve conflicts, and run cross-boundary validation. Do not assume a worker's claim is correct merely because it reported success.

## Verify proportionately

- Check ambiguous, surprising, contradictory, or weakly evidenced worker results. Send one targeted follow-up to the same worker before replacing it or escalating the investigation.
- Preserve the user's approval boundaries. Delegation does not authorize new external actions, broader edits, or unsafe writes.
- Deliver a concise synthesis that distinguishes verified conclusions from remaining uncertainty.
