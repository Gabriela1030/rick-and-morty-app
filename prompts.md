# Uso de Inteligencia Artificial (IA) en el Proyecto

Este documento registra los prompts utilizados con herramientas de IA para el desarrollo del proyecto. La IA se utilizó principalmente para acelerar el desarrollo,  mejorar el diseño y crear pruebas unitarias.

---

## Prompts Utilizados

## 1. Generación de SVG para Representar un Átomo

**Prompt:**

 Generar un SVG de un átomo con electrones orbitando alrededor de un núcleo central. Los electrones deben estar distribuidos de manera equidistante en las órbitas elípticas y deben tener el mismo color verde claro  #97ce4c que el núcleo.

**Respuesta:**

```svg
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- Electron Orbits -->
  <ellipse cx="50" cy="50" rx="45" ry="20" stroke="#97ce4c" stroke-width="3" fill="none" transform="rotate(0, 50, 50)" />
  <ellipse cx="50" cy="50" rx="45" ry="20" stroke="#97ce4c" stroke-width="3" fill="none" transform="rotate(60, 50, 50)" />
  <ellipse cx="50" cy="50" rx="45" ry="20" stroke="#97ce4c" stroke-width="3" fill="none" transform="rotate(120, 50, 50)" />
  
  <!-- Nucleus -->
  <circle cx="50" cy="50" r="10" fill="#97ce4c" />
  
  <!-- Electrons -->
  <circle cx="95" cy="50" r="4" fill="#97ce4c" />
  <circle cx="72.5" cy="93.3" r="4" fill="#97ce4c" />
  <circle cx="27.5" cy="93.3" r="4" fill="#97ce4c" />
  <circle cx="5" cy="50" r="4" fill="#97ce4c" />
  <circle cx="27.5" cy="6.7" r="4" fill="#97ce4c" />
  <circle cx="72.5" cy="6.7" r="4" fill="#97ce4c" />
</svg>

##  2. Perfeccionar la Organización del Código para el Componente CharacterList.module.css

Prompt:

Perfecciona la organización del código CSS para el componente CharacterList.module.css, asegurando que el estilo sea modular y fácil de mantener, con una estructura clara para la disposición de los personajes y su información en el diseño.

Respuesta:

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #202329;
  border-radius: 8px;
}

h1 {
  text-align: center;
  font-size: 2rem;
  color: #97ce4c;
  margin-bottom: 20px;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; 
  justify-content: space-evenly; 
}


.addButtonContainer {
  text-decoration: none;
  color: inherit;
}


.addButton {
  border: 1px solid #3c3e44;
  border-radius: 8px;
  padding: 10px;
  width: 220px; 
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #3c3e44;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.addButton:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.addButton span {
  font-size: 3rem;
  color: #97ce4c;
}

.addButton p {
  margin: 10px 0 0;
  font-size: 1rem;
  color: #ffffff;
}

# Documentación de las Librerías y Dependencias para Pruebas Unitarias con ViteTest y Jest

## 3. Prompt para Saber las Librerías y Dependencias para Pruebas Unitarias

**Prompt:**

> ¿Cuáles son las librerías y dependencias que puedo utilizar para realizar pruebas unitarias en un proyecto con Vite, ViteTest y Jest? 

**Respuesta:**

Para configurar pruebas unitarias en un proyecto con Vite, ViteTest y Jest, debes instalar algunas librerías y realizar configuraciones adecuadas. Aquí están las principales librerías y dependencias que puedes utilizar:

### Librerías y Dependencias

1. **Vite**: El bundler para tu aplicación.
   - `vite`: La herramienta para la construcción de aplicaciones en Vite.

2. **Jest**: Un marco de pruebas muy utilizado en JavaScript para pruebas unitarias y de integración.
   - `jest`: La librería principal para Jest.
   - `@testing-library/react`: Herramientas de utilidad para realizar pruebas en componentes de React.
   - `@testing-library/jest-dom`: Extensiones de Jest para facilitar las aserciones en el DOM.
   - `@vitejs/plugin-vue`: Si estás usando Vue.js, este plugin es necesario para integrar Vite con Vue.

3. **ViteTest**: Un entorno de pruebas basado en Vite.
   - `vite-plugin-test`: Un plugin para hacer pruebas en un entorno Vite.
   - `vitest`: El framework de pruebas para Vite que es rápido y permite realizar pruebas unitarias, de integración y de extremo a extremo.
