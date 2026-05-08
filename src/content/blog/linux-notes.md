---
title: "Linux Notes for Engineering Students"
description: "一些适合课程实验和科研项目的 Linux 命令与工作流记录。"
date: 2026-04-24
tags: ["Linux", "Workflow", "Tools"]
category: "Tools"
---

## Why Linux Matters

Linux 是很多科研计算、嵌入式开发和服务器部署的共同底座。熟悉它能减少环境问题，也能让实验流程更可复现。

## Useful Commands

```bash
pwd
ls -lah
mkdir -p experiments/run-001
grep -R "TODO" src
```

## Project Hygiene

- 用 `README.md` 记录如何复现实验。
- 用 `.gitignore` 排除缓存、模型权重和大文件。
- 用 `requirements.txt`、`pyproject.toml` 或 `environment.yml` 固定依赖。

## Next Steps

可以继续补充 SSH、tmux、systemd、Docker 和远程 GPU 工作流。
