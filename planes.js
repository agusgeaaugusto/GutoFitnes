// Cinco entrenamientos semanales (1–5). Cada uno: Lunes–Viernes, 3–4 ejercicios por día.
window.PLANES = {
  "1": {
    "Lunes": [
      { "name": "Press banca con barra", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=rT7DgCr-3pg" },
      { "name": "Press inclinado con mancuernas", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=SrqOu55lrYU" },
      { "name": "Fondos en paralelas", "time": "3 x al fallo", "video": "https://www.youtube.com/watch?v=2z8JmcrW-As" },
      { "name": "Extensión de tríceps en polea", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=2-LAMcpzODU" }
    ],
    "Martes": [
      { "name": "Prensa de piernas", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
      { "name": "Extensiones de cuádriceps en máquina", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=YyvSfVjQeL0" },
      { "name": "Curl femoral tumbado", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=1Tq3QdYUuHs" },
      { "name": "Sentadilla libre con barra", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=ultWZbUMPL8" }
    ],
    "Miércoles": [
      { "name": "Cinta de correr (intervalos)", "time": "20 min", "video": "https://www.youtube.com/watch?v=dkikq_fYBNw" },
      { "name": "Saltos pliométricos en caja", "time": "3 x 12", "video": "https://www.youtube.com/watch?v=hxldG9FX4j4" },
      { "name": "Bicicleta estática (HIIT)", "time": "15 min", "video": "https://www.youtube.com/watch?v=GzEpFWfFWiQ" },
      { "name": "Plancha con peso", "time": "3 x 45 seg", "video": "https://www.youtube.com/watch?v=hy6Ap1iH8xw" }
    ],
    "Jueves": [
      { "name": "Dominadas asistidas o libres", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=eGo4IYlbE5g" },
      { "name": "Remo con barra", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=vT2GjY_Umpw" },
      { "name": "Jalón en polea al pecho", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
      { "name": "Curl de bíceps con barra", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" }
    ],
    "Viernes": [
      { "name": "Peso muerto rumano", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=jEy_czb3RKA" }, // corregido
      { "name": "Hip thrust en banco", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=LM8XHLYJoYs" },
      { "name": "Buenos días con barra", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=vKPGe8zb2S4" },
      { "name": "Curl femoral sentado en máquina", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=ELOCsoDSmrg" }
    ]
  },
  "2": {
    "Lunes": [
      { "name": "Press pecho en máquina", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=xUm0BiZCWlQ" },
      { "name": "Aperturas con mancuernas en banco plano", "time": "3 x 12-15", "video": "https://www.youtube.com/watch?v=eozdVDA78K0" },
      { "name": "Fondos en máquina asistida", "time": "3 x 10-12", "video": "https://www.youtube.com/watch?v=kbmVlw-i0Vs" },
      { "name": "Extensión de tríceps con barra EZ", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=d_KZxkY_0cM" }
    ],
    "Martes": [
      { "name": "Sentadilla en multipower", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=AHnX-aimA4E" },
      { "name": "Prensa horizontal", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
      { "name": "Zancadas con mancuernas", "time": "3 x 12 por pierna", "video": "https://www.youtube.com/watch?v=QOVaHwm-Q6U" }
    ],
    "Miércoles": [
      { "name": "Elíptica (intervalos)", "time": "20 min", "video": "https://www.youtube.com/watch?v=sHMemwz_HPU" },
      { "name": "Sprint en cinta (30/30)", "time": "12 min", "video": "https://www.youtube.com/watch?v=dkikq_fYBNw" },
      { "name": "Escaladora (tutorial)", "time": "10 min", "video": "https://www.youtube.com/watch?v=ST-5lD69XqU" }
    ],
    "Jueves": [
      { "name": "Remo en máquina Hammer", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=FOAiePVeJgM" },
      { "name": "Jalón agarre cerrado", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=4P3-TXbH4tw" },
      { "name": "Curl alterno con mancuernas", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=av7-8igSXTs" }
    ],
    "Viernes": [
      { "name": "Peso muerto a 1 pierna (mancuernas)", "time": "3 x 10 por pierna", "video": "https://www.youtube.com/watch?v=X2BM5J3UkEo" },
      { "name": "Hyperextensions (espalda baja)", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=ENXyYltB7CM" },
      { "name": "Curl femoral de pie", "time": "3 x 12 por pierna", "video": "https://www.youtube.com/watch?v=CZVTv9T_Ml8" }
    ]
  },
  "3": {
    "Lunes": [
      { "name": "Press inclinado con barra", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=DbFgADa2PL8" },
      { "name": "Crossover en polea alta", "time": "3 x 12-15", "video": "https://www.youtube.com/watch?v=Iwe6AmxVf7o" },
      { "name": "Press cerrado para tríceps", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=z6PJMT2y8GQ" }
    ],
    "Martes": [
      { "name": "Sentadilla frontal", "time": "4 x 6-8", "video": "https://www.youtube.com/watch?v=uQeCK1vfj4E" }, // corregido
      { "name": "Peso muerto sumo", "time": "4 x 6-8", "video": "https://www.youtube.com/watch?v=MBbyAqvTNkU" },
      { "name": "Prensa inclinada", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=IZxyjW7MPJQ" }
    ],
    "Miércoles": [
      { "name": "Remos con cuerda de batalla", "time": "10 x 30/30", "video": "https://www.youtube.com/watch?v=pQb2xIGioyQ" },
      { "name": "Remo en máquina (técnica)", "time": "12 min", "video": "https://www.youtube.com/watch?v=gvM-WuRfbkY" }, // corregido
      { "name": "Cinta inclinada (caminar rápido)", "time": "12 min", "video": "https://www.youtube.com/watch?v=NAsObfFJXvE" }
    ],
    "Jueves": [
      { "name": "Dominadas supinas", "time": "4 x 6-8", "video": "https://www.youtube.com/watch?v=ylVmNQlKdAI" },
      { "name": "Remo con mancuerna a una mano", "time": "4 x 10 por lado", "video": "https://www.youtube.com/watch?v=pYcpY20QaE8" },
      { "name": "Curl bíceps en predicador", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=Gydpcouclx8" }
    ],
    "Viernes": [
      { "name": "Peso muerto con barra hexagonal", "time": "4 x 6-8", "video": "https://www.youtube.com/watch?v=1ZXobu7JvvE" },
      { "name": "Good mornings con mancuernas", "time": "3 x 12", "video": "https://www.youtube.com/watch?v=nWyx81AfTos" },
      { "name": "Femoral en máquina tumbado", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=1Tq3QdYUuHs" }
    ]
  },
  "4": {
    "Lunes": [
      { "name": "Press en máquina convergente", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=0CFOTfwP4CY" },
      { "name": "Aperturas en pec-deck", "time": "3 x 12-15", "video": "https://www.youtube.com/watch?v=H4mVGHaK2f4" },
      { "name": "Fondos en anillas asistidos", "time": "3 x 8-10", "video": "https://www.youtube.com/watch?v=NbUOZOKzmIQ" },
      { "name": "Extensión tríceps en cuerda", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=2-LAMcpzODU" }
    ],
    "Martes": [
      { "name": "Hack squat (máquina)", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=LfEhHboTcow" },
      { "name": "Zancada en smith", "time": "3 x 12 por pierna", "video": "https://www.youtube.com/watch?v=QTdjgLczRhs" },
      { "name": "Extensiones en máquina unilateral", "time": "3 x 12 por pierna", "video": "https://www.youtube.com/watch?v=YyvSfVjQeL0" }
    ],
    "Miércoles": [
      { "name": "Bike sprint (20/40)", "time": "12 min", "video": "https://www.youtube.com/watch?v=GzEpFWfFWiQ" },
      { "name": "Cinta HIIT (1/1)", "time": "12 min", "video": "https://www.youtube.com/watch?v=vdsaHSr1H_E" },
      { "name": "Sled push (trineo)", "time": "8 x 20 m", "video": "https://www.youtube.com/watch?v=-sCBIaDGSC4" } // corregido
    ],
    "Jueves": [
      { "name": "Jalón tras nuca (ligero, controlado)", "time": "3 x 12", "video": "https://www.youtube.com/watch?v=CAwf7n6Luuc" },
      { "name": "Remo T-bar", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=j3Igk5nyZE4" },
      { "name": "Curl martillo con mancuernas", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=zC3nLlEvin4" }
    ],
    "Viernes": [
      { "name": "Peso muerto piernas rígidas", "time": "4 x 8-10", "video": "https://www.youtube.com/watch?v=1uDiW5--rAE" }, // corregido
      { "name": "Hip thrust en máquina", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=LM8XHLYJoYs" },
      { "name": "Femoral sentado", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=ELOCsoDSmrg" }
    ]
  },
  "5": {
    "Lunes": [
      { "name": "Press banca con mancuernas (neutro)", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=VmB1G1K7v94" },
      { "name": "Press inclinado en smith", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=b8DqTO6ak0k" },
      { "name": "Extensión tríceps overhead con cuerda", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=YbX7Wd8jQ-Q" }
    ],
    "Martes": [
      { "name": "Sentadilla goblet pesada", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=MeIiIdhvXT4" }, // corregido
      { "name": "Prensa pies altos (glúteo)", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=IZxyjW7MPJQ" },
      { "name": "Elevación de talones en prensa (gemelos)", "time": "4 x 15", "video": "https://www.youtube.com/watch?v=YMmgqO8Jo-k" }
    ],
    "Miércoles": [
      { "name": "Cinta inclinada continua", "time": "20 min", "video": "https://www.youtube.com/watch?v=vdsaHSr1H_E" },
      { "name": "Bike continua", "time": "15 min", "video": "https://www.youtube.com/watch?v=rEqRmKAQ5xM" },
      { "name": "Core: rueda abdominal", "time": "3 x 10-12", "video": "https://www.youtube.com/watch?v=9ZCoAbI7uX0" }
    ],
    "Jueves": [
      { "name": "Remo con polea baja", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=GZbfZ033f74" },
      { "name": "Jalón agarre neutro", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=KgZqDuNx7rI" },
      { "name": "Curl bíceps barra Z", "time": "4 x 10-12", "video": "https://www.youtube.com/watch?v=ykJmrZ5v0Oo" }
    ],
    "Viernes": [
      { "name": "Peso muerto rumano con mancuernas", "time": "4 x 10", "video": "https://www.youtube.com/watch?v=FQKfr1YDhEk" }, // corregido
      { "name": "Hip thrust pies elevados", "time": "4 x 12", "video": "https://www.youtube.com/watch?v=LM8XHLYJoYs" },
      { "name": "Curl femoral en máquina (tempo)", "time": "3 x 10 tempo 3-1-1", "video": "https://www.youtube.com/watch?v=1Tq3QdYUuHs" }
    ]
  }
};
