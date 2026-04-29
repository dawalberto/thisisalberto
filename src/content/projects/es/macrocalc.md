---
title: 'MacroCalc'
description: 'Una calculadora nutricional que estima el BMR, la masa magra y el reparto de macronutrientes con varias fórmulas científicas. La versión de escritorio integra una IA que se ejecuta completamente en local para generar consejos personalizados, sin que ningún dato salga de tu equipo.'
tags: ['Astro', 'React', 'TypeScript', 'Tailwind CSS', 'Transformers.js', 'WebGPU']
image: '../../../assets/macrocalc-logo.png'
repo: 'https://github.com/dawalberto/macronutrients'
demo: 'https://macrocalc.fit'
order: 1
---

## ¿Por qué?

La mayoría de las calculadoras de calorías y macronutrientes que hay online te encierran en una única fórmula y una recomendación genérica. MacroCalc nace para comparar las ecuaciones científicas más conocidas en paralelo y permitir al usuario ajustar cada entrada — peso, altura, edad, sexo, actividad y objetivo — viendo cómo cambia el reparto de macros al instante.

## ¿Qué es exactamente?

MacroCalc calcula el **BMR** (metabolismo basal), la **LBM** (masa magra) y la distribución diaria de macronutrientes (proteína / grasa / carbohidratos) según el objetivo elegido: mantenimiento, volumen o definición.

- **Varias fórmulas de LBM**: Boer, James, Hume — o entrada manual.
- **Varias fórmulas de BMR**: Mifflin–St Jeor, Harris–Benedict revisada y Katch–McArdle.
- **Ajustes por objetivo**: desviaciones de ±300 kcal y ratios de proteína / grasa / carbohidratos adaptados.
- **Interfaz reactiva**: cada cambio en un slider o desplegable se propaga al instante por los cálculos.

## IA local en la versión de escritorio

La característica más destacada de la versión de escritorio es una **IA totalmente local**: un modelo de lenguaje ligero se descarga una sola vez y se ejecuta íntegramente en la máquina del usuario gracias a **Transformers.js** con aceleración por **WebGPU** (y respaldo en WASM). Genera consejos nutricionales personalizados y traducciones a partir del perfil y el objetivo del usuario — **sin enviar ningún dato a un servidor**, sin claves de API ni dependencia de la nube. Todo ocurre en el dispositivo.
