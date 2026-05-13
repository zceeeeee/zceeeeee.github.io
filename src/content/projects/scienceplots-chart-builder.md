---
title: "scienceplots-chart-builder"
description: "面向光谱、器件性能和 EL 数据的本地 Web 科研制图工具。"
date: 2026-05-13
tags: ["Python", "Dash", "Plotly", "Matplotlib", "SciencePlots", "Data Analysis"]
category: "Research Tools"
status: "In Progress"
featured: true
github: "https://github.com/zceeeeee/scienceplots-chart-builder"
cover: "/images/projects/scienceplots-chart-builder/scienceplots-spectra-preview.png"
---

## Overview

scienceplots-chart-builder 是一个面向实验数据的本地 Web 科研制图工具。它使用 Dash 和 Plotly 提供交互式预览，并使用 Matplotlib 和 SciencePlots 导出适合论文、组会汇报和 PPT 的静态图表。

项目主要面向光谱数据、光电器件性能数据和 EL 光谱数据处理场景，目标是减少手动整理实验数据和重复画图的时间，让科研绘图流程更加标准化。

## Motivation

在光电器件、发光器件或光谱实验中，实验数据通常来自不同测试软件，文件格式不够统一。手动处理这些数据、修改图例、调整线型、导出论文风格图表会消耗大量时间。

这个项目把常见的数据扫描、样品命名、图例编辑、曲线预览、峰值标注和多格式导出流程整合到一个本地 Web 工具中，使实验数据从原始文件到展示图表的过程更加高效。

## Features

- 扫描 `.txt` 实验数据文件
- 支持光谱数据和器件性能 / EL 数据
- 管理样品文件列表
- 编辑样品名、图例文字、颜色、线型、marker 和图表标题
- 标注最高点 / 最低点，并在预览图中拖动标注
- 导出 PNG / SVG / PDF / CSV
- 提供源码版和一键启动版两种使用方式

## Tech Stack

- Python
- Dash
- Plotly
- Matplotlib
- SciencePlots
- Pandas
- Local Web App

## Screenshots

### Main Interface

主界面采用本地 Dash Web 应用形式。左侧面板用于选择数据类型、扫描文件、添加样品文件、设置标注方式和导出格式；右侧区域用于显示样品文件列表和交互式 Plotly 图表预览。

![SciencePlots Chart Builder main interface](/images/projects/scienceplots-chart-builder/scienceplots-ui-empty.png)

### Spectra Data Preview

对于光谱数据，工具可以扫描多个 `.txt` 文件，自动识别为光谱曲线，并在交互式预览区域中显示。用户可以在导出前调整样品名、图例文字、颜色、线型、marker 和标注位置。

![Spectra preview with peak annotations](/images/projects/scienceplots-chart-builder/scienceplots-spectra-preview.png)

### Device Performance and EL Data Preview

对于器件性能与 EL 数据，工具支持包含电压、电流密度、亮度、效率、CIE 坐标和 EL 光谱等信息的实验数据文件，并可进行归一化显示、样品对比和峰值标注。

![EL spectra preview](/images/projects/scienceplots-chart-builder/scienceplots-el-preview.png)

## Results

项目已经支持本地 Web 运行、实验数据扫描、交互式图表预览、样品信息编辑和 PNG / SVG / PDF / CSV 导出。它把实验数据整理、图表预览、样式调整和科研图表导出流程整合成一个可复用的本地工具。

## My Contribution

- 设计本地 Web 工具的整体使用流程。
- 实现 Dash Web 界面，用于管理文件列表、编辑样品信息和调整图表样式。
- 编写数据解析与绘图核心逻辑，支持光谱数据和器件性能 / EL 数据。
- 使用 Plotly 实现交互式预览，使用 Matplotlib + SciencePlots 导出静态图表。
- 整理示例数据、启动脚本、项目说明和常见问题。

## Links

- GitHub: https://github.com/zceeeeee/scienceplots-chart-builder
