#Use Effect Hook
Permite llevar a cabo efectos secundarios en componentes funcionales. Reemplaza el uso de métodos para manejar el ciclo de vida del componente que se tenia en componentes de clase.

Se realiza la importación con:

`import React, { useEffect } from "react";`

#### Caso de uso 1 (No subscription)
Se incluye el siguiente statement dentro del componente:

```
useEffect(() => {
    func()
  }, [arg]);
```

Donde:

- useEffect: el hook al que se le pasa como parámetros: una arrow function a ejecutar como efecto secundario y un arreglo de argumentos a examinar para permitir esa ejecución.
- func: función interna que representa una acción a ejecutar como efecto secundario.
- arg: variable a examinar, si cambia de valor permite la ejecución del efecto secundario. Si el arreglo es vacío, se ejecutará el efecto secundario cada vez que se despliegue(render) nuevamente el componente.