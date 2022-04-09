#Use Context Hook
El contexto de react permite compartir un estado con todos los componentes envueltos en un componente proveedor sin importar su lugar en la jerarquía de importación. El hook de contexto permite obtener el estado compartido en un componente receptor.

#### Configuración del contexto, proveedor y hook:

Se realiza la creación del contexto con las siguientes instrucciones:

```
import React from "react";

const GlobalContext = React.createContext(null);
```

Es útil dentro de la misma definición del contexto configurar el componente provider y el hook de contexto:

```
// Componente proveedor
export const GlobalContextProvider = (props) => {
  return (
    <GlobalContext.Provider value={{ color: "red", value: 2 }}>
      {props.children}
    </GlobalContext.Provider>
  );
};
```

```
// Hook de contexto
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("GlobalContext provider is required");
  }
  return context;
};
```
Donde:

- React.createContext: función utilizada para crear un contexto en React.
- GlobalContext: contexto creado.
- GlobalContext.Provider: componente proveedor, comparte el estado dado como prop value.
- GlobalContextProvider: se configura y exporta un componente proveedor de orden superior para poder añadir funcionalidad(hooks).
- useContext: hook que permite obtener los valores compartidos en el contexto que recibe como argumento.
- context: contexto obtenido por el hook con el estado provisto.
- useGlobalContext: hook personalizado que utilizan los componentes para obtener el contexto.

#### Configuración en componentes

##### Componente principal:

En el componente principal se debe importar el componente proveedor:

`import { GlobalContextProvider } from "./components/UseContext/context/GlobalContext";`

El componente proveedor engloba los componentes principales a proveer:

```
<GlobalContextProvider>
  <div className="App">
    <UseState />
    <UseEffect />
    <UseContext />
  </div>
</GlobalContextProvider>
```
##### Componente que usa el contexto:

El componente que usa el contexto debe importar el hook:
`import { useGlobalContext } from "./context/GlobalContext";`

El componente usa el hook para obtener los estados compartidos:
`const { color, value } = useGlobalContext();`
