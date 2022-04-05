#Use State Hook
Añade estado en componentes funcionales.

Se realiza la importación con:

`import React, { useState } from "react";`

Se incluye el siguiente statement dentro del componente:

`const [darkMode, setDarkMode] = useState(false);`

Se forma un par, donde:

- darkMode: el estado mutable del componente.
- setDarkMode: la función que puede usarse para cambiar el estado.
- useState: el hook al que se le pasa como parámetro el estado inicial (false).