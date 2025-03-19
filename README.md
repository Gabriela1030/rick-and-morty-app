# 🚀 Proyecto de Consumo de API de Rick y Morty

Esta es una aplicación React que te permite explorar una lista de personajes de la famosa serie, ver detalles de cada uno y crear nuevos personajes a través de un formulario. La información del nuevo personaje se envía a [webhook.site](https://webhook.site) para su procesamiento.

---

## 🖥️ Vista Previa

![image](https://github.com/user-attachments/assets/4da85945-f0b4-4a38-91cd-3c2faf788774)


---

# 🎯 Requisitos

### Consumo de API Externa
- Obtener y mostrar una lista de personajes desde la API de Rick y Morty.
- Mostrar detalles de un personaje seleccionado.
- Gestionar las peticiones HTTP a través de una clase de servicio dedicada (`apiService.ts`).

### Envío de Información
- Formulario para crear un nuevo personaje con:
  - Imagen (subida por el usuario).
  - Nombre del personaje.
  - Estado (vivo, muerto, desconocido).
- Enviar esta información a (https://webhook.site/#!/view/300991a1-e55e-45f4-8408-2431dde882bc/53101de0-c418-4dda-b418-4668650ef782/1)).
- Mostrar una confirmación del envío.

### Arquitectura del Proyecto
- Modularización en carpetas como `components`, `modules`, `services`, `hooks` y `contexts`.
- Uso de React con TypeScript.
- Gestión del estado con `useState` y `useContext`.
- Creación de hooks personalizados 
- Uso de CSS Modules para los estilos.

### Buenas Prácticas
- Uso de TypeScript y componentes reutilizables.
- Pruebas unitarias con Jest.
- Aplicación de principios SOLID.

---

## 🛠️ Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local:

1. Clona el repositorio:
   ```bash
   git clone (https://github.com/Gabriela1030/rick-and-morty-app/)

2. instalar dependencias:
   npm install

  

