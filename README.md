# TI Wrapped 2024

Un sitio web estilo "Spotify Wrapped" para mostrar los logros y proyectos del departamento de Tecnologías de la Información.

## Características

- Diseño moderno con estética Spotify Wrapped
- Animaciones fluidas con GSAP y ScrollTrigger
- Scroll storytelling vertical
- Contadores animados para métricas
- Efecto confetti en la sección final
- Totalmente responsive
- Barra de progreso de scroll

## Tecnologías

- **Framework**: Astro 5
- **Animaciones**: GSAP + ScrollTrigger
- **Estilos**: CSS puro con variables CSS
- **Tipografía**: Clash Display + Cabinet Grotesk (Fontshare)

## Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## Estructura del Proyecto

```
vise-wrapped/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Hero.astro
│   │   ├── Summary.astro
│   │   ├── ProjectCard.astro
│   │   ├── TopProjects.astro
│   │   ├── Metrics.astro
│   │   ├── TechStack.astro
│   │   ├── Timeline.astro
│   │   └── Closing.astro
│   ├── data/
│   │   └── projects.json
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Personalización

### Datos de Proyectos

Edita el archivo `src/data/projects.json` para personalizar:
- Información general del año
- Proyectos y sus métricas
- Tecnologías utilizadas
- Timeline de eventos
- Logros destacados

### Colores

Los colores se definen como variables CSS en `src/styles/global.css`:

```css
:root {
  --color-magenta: #ff006e;
  --color-cyan: #00f5d4;
  --color-orange: #ff9e00;
  --color-purple: #8338ec;
  --color-blue: #3a86ff;
  --color-green: #9be15d;
}
```

## Licencia

MIT

