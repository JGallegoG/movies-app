# Aplicación de Búsqueda de Películas

Esta aplicación permite a los usuarios buscar películas y obtener detalles sobre ellas, utilizando la API de [The Movie Database (TMDb)](https://www.themoviedb.org).

## Funcionalidades

### 1. Búsqueda de Películas
Los usuarios pueden buscar películas ingresando un título en la barra de búsqueda. La aplicación enviará una solicitud a la API de TMDb y mostrará una lista de resultados que coincidan con el título proporcionado.

### 2. Visualización de Detalles de la Película
La aplicación mostrará por busqueda encontrada:
- **Póster de la Película**: La imagen oficial del póster.
- **Título**: El nombre de la película.
- **Sinopsis**: Un resumen breve de la trama.

## Vita previa
---

![Vista previa app movie](/src/assets/movie-example.png)

---

## Uso de la API de TMDb

### Registro y Obtención de la API Key
Para interactuar con la API de TMDb, es necesario registrarse en el sitio web de TMDb y obtener una API Key. Esta clave es necesaria para realizar solicitudes a la API.

### Endpoints Principales

- **Búsqueda de Películas**: 
  - **URL**: `https://api.themoviedb.org/3/search/movie`
  - **Método**: `GET`
  - **Parámetros**:
    - `api_key`: Tu clave API de TMDb.
    - `query`: El término de búsqueda (título de la película).

- **Detalles de la Película**: 
  - **URL**: `https://api.themoviedb.org/3/movie/{movie_id}`
  - **Método**: `GET`
  - **Parámetros**:
  - `api_key`: Tu clave API de TMDb.

### 2. Configuración e Instalación

Clonar el Repositorio: Clona el repositorio de la aplicación a tu máquina local.

  ```bash

  git clone https://github.com/tu_usuario/buscador-peliculas.git

  ```

Instalar Dependencias: Navega al directorio del proyecto e instala las dependencias necesarias.

  ```bash
  cd buscador-peliculas
  npm install
  ```

Ejecutar la Aplicación: Inicia la aplicación en modo desarrollo.

  ```bash
  npm run dev
  ```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
