---
title: "Linear Regression Notes"
description: "从最小二乘、梯度下降和评估指标重新梳理线性回归。"
date: 2026-05-01
tags: ["Machine Learning", "Python", "Math"]
category: "Machine Learning"
---

## Overview

线性回归是理解监督学习的一个很好的入口：它足够简单，但包含了建模假设、损失函数、优化、评估和泛化等核心概念。

## Least Squares

给定输入矩阵 `X` 和目标向量 `y`，常见目标是最小化均方误差：

```txt
min_w ||Xw - y||_2^2
```

在满秩条件下，可以使用正规方程求解；在更大数据集上，梯度下降通常更灵活。

## Gradient Descent

```python
for step in range(num_steps):
    prediction = X @ weights
    gradient = X.T @ (prediction - y) / len(y)
    weights -= learning_rate * gradient
```

## Metrics

- MSE: 对大误差更敏感。
- MAE: 更容易解释，受异常值影响较小。
- R-squared: 衡量模型解释方差的比例。

## Formula Placeholder

之后可以接入 KaTeX 或 remark-math 来渲染公式：

```txt
w = (X^T X)^{-1} X^T y
```
