---
title: "serial-scope"
description: "面向 STM32、ESP32 和传感器调试的实时串口数据可视化工具。"
date: 2026-05-13
tags: ["Python", "Streamlit", "Serial", "STM32", "ESP32", "Data Visualization"]
category: "Embedded Tools"
status: "In Progress"
featured: true
github: "https://github.com/zceeeeee/serial-scope"
cover: "/images/projects/serial-scope/serial-scope-realtime-curve.png"
---

## Overview

serial-scope 是一个基于 Python 的实时串口数据可视化工具。它可以从串口读取文本数据，在 Streamlit Web 界面中实时绘制多通道曲线，并支持将采集到的数据导出为 CSV 文件。

这个项目面向 STM32、ESP32、Arduino、传感器采集、ADC 波形观察和小型实验数据记录等场景，适合作为嵌入式开发和实验调试过程中的轻量级上位机工具。

## Motivation

调试 MCU 项目时，经常需要观察传感器数据、ADC 采样值或调试变量的实时变化。传统串口助手只能看到文本输出，不方便观察趋势，也不方便保存结构化数据。

serial-scope 让 MCU 只需要通过串口输出简单的逗号分隔数据，电脑端就能实时绘图、记录原始数据并导出 CSV，方便实验记录和数据分析。

## Features

- 串口参数配置
- 实时多通道曲线显示
- CSV 数据导出
- 无硬件 Demo 模式
- STM32 / ESP32 友好的输出格式
- 原始串口文本记录
- 解析异常与串口异常处理
- 支持样本序号或时间戳作为横轴

## Tech Stack

- Python
- Streamlit
- PySerial
- Pandas
- Plotly
- STM32 / ESP32 serial output examples

## Data Format

单通道数据可以直接输出：

```text
123
124
125
```

多通道数据使用英文逗号分隔：

```text
123,456,789
124,460,790
126,462,795
```

也支持第一行作为通道名：

```text
adc1,adc2,temp
123,456,25.6
124,460,25.7
```

## Screenshots

### Real-time Curve

主界面左侧是控制面板，可选择 Demo 或 Serial 数据源，配置串口、波特率、显示点数、缓存行数、刷新间隔和横轴类型。右侧展示当前连接状态、数据点数量、通道数量以及实时曲线。

![serial-scope real-time curve](/images/projects/serial-scope/serial-scope-realtime-curve.png)

### Current Data, Raw Serial Log and CSV Export

除了实时曲线外，serial-scope 还会显示当前解析后的数据表、原始串口日志和 CSV 导出区域，方便同时查看可视化结果、结构化数据和原始文本输出。

![serial-scope data table and CSV export](/images/projects/serial-scope/serial-scope-data-export.png)

## My Contribution

- 设计串口数据读取、解析和状态管理流程。
- 实现 Streamlit Web UI，用于配置串口、显示实时曲线和导出 CSV。
- 设计适合 STM32 / ESP32 的串口输出格式，并提供示例代码。
- 添加无硬件 Demo 模式，方便在没有开发板连接时测试界面和数据流程。
- 实现当前数据表、原始串口日志和 CSV 导出功能。

## Results

项目已经实现基础串口读取、多通道解析、实时可视化、CSV 导出和 Demo 模式。它可以作为 STM32 / ESP32 传感器项目的调试工具，也可以用于简单实验数据记录。

## Links

- GitHub: https://github.com/zceeeeee/serial-scope
