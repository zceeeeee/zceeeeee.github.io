---
title: "SAW-AlN 换能器仿真与测试"
description: "围绕 AlN 基 IDT 声表面波器件，结合 COMSOL 仿真与 VNA 测试完成频率响应和探针结构影响分析。"
date: 2026-05-07
tags: ["SAW", "AlN", "COMSOL", "VNA", "Device Simulation", "RF Measurement"]
category: "Research / Device Simulation"
status: "Completed"
featured: true
cover: "/images/projects/saw-aln/rayleigh-mode-shape.png"
---

## Overview

本项目围绕 **AlN 基 IDT 声表面波器件** 展开，结合 COMSOL 仿真与矢量网络分析仪（VNA）实验测试，对 AlN / 蓝宝石异质结构中的声波传播模式、器件频率响应以及测试探针结构对高频信号完整性的影响进行了分析。

项目目标是建立从理论模型、有限元仿真、频域响应分析到实验测试验证的完整流程，并通过仿真与实测结果对比，验证 AlN 薄膜在高频声表面波器件中的高声速特性。

![Rayleigh mode shape](/images/projects/saw-aln/rayleigh-mode-shape.png)

## Motivation

随着 5G / 6G 通信系统向 GHz 频段演进，射频滤波器对工作频率、带宽和信号稳定性的要求不断提高。氮化铝（AlN）具有较高声速、良好热稳定性、高击穿场强和 CMOS 工艺兼容性，是高频声表面波器件的重要候选材料。

本项目重点关注外延在蓝宝石衬底上的 C 面 AlN 薄膜，研究其声波传播模式与 IDT 器件频率响应。

## Background

AlN 属于六方纤锌矿结构，具有显著的压电各向异性。本实验采用外延于蓝宝石衬底上的 C 面 `(0001)` AlN 薄膜，极化轴垂直于衬底，有利于激发瑞利波。

![AlN crystal structure](/images/projects/saw-aln/aln-crystal-structure.png)

在声表面波器件中，瑞利波的能量主要束缚在表面约一个波长深度内，质点通常表现为椭圆极化运动。除主模态瑞利波外，AlN / 蓝宝石异质结构中还可能出现受衬底纵波声速影响的高阶模态或纵向漏波。

![Rayleigh wave mode](/images/projects/saw-aln/rayleigh-wave-mode.png)

## Simulation Model

仿真部分使用 COMSOL 建立二维单周期单元模型，用于模拟无限长 IDT 结构。模型主要包含铝电极、AlN 压电薄膜、蓝宝石衬底和空气层。

左右边界设置周期性边界条件，底部区域设置完美匹配层（PML），用于吸收向下辐射的体波，降低底部反射对结果的影响。

![COMSOL 2D unit cell](/images/projects/saw-aln/comsol-2d-unit-cell.png)

## Frequency-Domain Analysis

在特征频率分析中，首先对 `100 MHz - 800 MHz` 范围进行扫描，以确认可能的声波模态频率。对于周期约 `16 um` 的结构，在约 `341 MHz` 附近观察到典型瑞利波振型。

随后以特征频率为中心进行频域扫描，通过终端导纳变化计算器件的 S 参数响应。

![S11 simulation curve](/images/projects/saw-aln/s11-simulation-curve.png)

在三维模型中，建立相向的两个 IDT 换能器，在 `300 MHz - 400 MHz` 范围内进行频域扫描，并读取传输参数 `S21`，用于观察对向换能器之间的信号传输特性。

![COMSOL 3D IDT model](/images/projects/saw-aln/comsol-3d-idt-model.png)

![S21 simulation curve](/images/projects/saw-aln/s21-simulation-curve.png)

## Experimental Measurement

实验测试部分使用矢量网络分析仪（VNA）和射频探针台对 AlN SAW 器件进行 S 参数测量。VNA 用于发射射频扫描信号并接收反射或传输信号；探针台配备高倍显微镜与三维精密位移台，用于调整探针与芯片焊盘的接触位置。

![Probe station microscope](/images/projects/saw-aln/probe-station-microscope.jpg)

测试过程中对比了 GS 与 GSG 两种探针结构。GSG 探针的信号针两侧均为地针，可以在高频测试中为信号线提供更稳定的接地回路和电场屏蔽，从而减少噪声与寄生效应对测量曲线的影响。

![GSG probe measurement](/images/projects/saw-aln/gsg-probe-photo.jpg)

## Results

以周期约 `16 um` 的 AlN 器件为例，仿真与实验结果均显示出明显的瑞利波主模态响应。实验中在约 `347 MHz` 处观测到显著主谐振峰，根据 `v = lambda * f` 可估算瑞利波声速约为 `5552 m/s`，与仿真得到的 `341 MHz` 结果高度接近。

在同一器件中，实验还在约 `696 MHz` 处观察到次级谐振峰，可理解为高阶模态或纵向漏波相关响应。

![Leaky longitudinal mode](/images/projects/saw-aln/leaky-longitudinal-mode.png)

| 参数 | 仿真结果 | 实验数据 | 文献数据 | 结论 |
|---|---:|---:|---:|---|
| AlN 厚度 | 1 um | 1 um | 720 nm | 厚度接近 |
| 瑞利波频率 | 341 MHz | 347 MHz | 342 MHz | 高度一致 |
| 瑞利波声速 | 5456 m/s | 5552 m/s | 5470 m/s | 高度一致 |
| 纵向漏波频率 | 691 MHz | 696 MHz | - | 高度一致 |

![VNA measurement curve](/images/projects/saw-aln/vna-measurement-curve.jpg)

## My Contribution

- 使用 COMSOL 建立 AlN / 蓝宝石异质结构的二维单周期模型。
- 设置周期性边界条件与 PML 区域，模拟无限长 IDT 器件与衬底吸收边界。
- 进行特征频率分析和频域扫描，识别瑞利波与高阶模态对应频率。
- 建立三维双换能器模型，并进行 S 参数仿真分析。
- 参与 VNA 与射频探针台测试，分析 GS / GSG 探针结构对高频测量曲线的影响。
- 整理仿真结果、实验数据和文献对比，形成项目汇报材料。

## What I Learned

通过这个项目，我对声表面波器件的基本工作机理、AlN 压电薄膜的高声速特性、COMSOL 多物理场建模流程以及 VNA 高频测试方法有了更系统的理解。这个项目也让我认识到，器件研究不仅需要建立理论和仿真模型，还需要通过实验测试、探针结构选择、数据对比和误差分析形成完整闭环。
