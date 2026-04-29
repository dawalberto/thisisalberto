---
title: 'MacroCalc'
description: 'A nutrition calculator that estimates BMR, lean body mass, and macro splits across multiple scientific formulas. The desktop version runs an AI model fully on-device to generate personalized nutrition tips, with no data leaving your machine.'
tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Transformers.js', 'WebGPU']
image: '../../../assets/macrocalc-logo.png'
repo: 'https://github.com/dawalberto/macronutrients'
demo: 'https://macrocalc.fit'
order: 1
---

## Why?

Most online calorie and macronutrient calculators lock you into a single formula and a generic recommendation. MacroCalc was built to compare the well-known scientific equations side by side and to let the user adjust every input — weight, height, age, gender, activity, and goal — while seeing the macro split update instantly.

## What exactly?

MacroCalc estimates **BMR** (Basal Metabolic Rate), **LBM** (Lean Body Mass) and the daily macro distribution (protein / fat / carbs) according to the selected goal: maintenance, surplus or definition.

- **Multiple LBM formulas**: Boer, James, Hume — or manual input.
- **Multiple BMR formulas**: Mifflin–St Jeor, Revised Harris–Benedict and Katch–McArdle.
- **Goal adjustments**: ±300 kcal offsets and tailored protein / fat / carb ratios.
- **Reactive UI**: every slider or dropdown change cascades through the calculations in real time.

## Local AI on the desktop version

The standout feature of the desktop build is a **fully local AI**: a small language model is downloaded once and then runs entirely on the user's machine via **Transformers.js** with **WebGPU** acceleration (and a WASM fallback). It generates personalized nutrition tips and translations based on the user's profile and goal — **without sending any data to a server**, with no API keys and no cloud dependency. Everything happens on-device.
