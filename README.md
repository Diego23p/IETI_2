# React Material

### Codigo de honor:
Debes seguir el Código de honor del ingeniero de sistemas para defender el estándar de integridad académica de la ECI:

* Tus respuestas a tareas, cuestionarios y exámenes deben ser tu propio trabajo (excepto para las tareas que permiten explícitamente la colaboración).

* No puedes compartir tus soluciones de tareas, cuestionarios o exámenes con otra persona a menos que el instructor lo permita explícitamente. Esto incluye cualquier cosa escrita por ti, como también cualquier solución oficial proporcionada por el docente o el monitor del curso.

* No puedes participar en otras actividades que mejorarán de manera deshonesta tus resultados o que mejorarán de manera deshonesta o dañarán los resultados de otras personas.

## Prerrequisitos

### npm

```
npm -version

6.14.4
```

### Git

```
> git --version

git version 2.21.0.windows.1
```

## Instalación

Para descargar localmente el repositorio se utiliza el comando como sigue:
```
git clone https://github.com/Diego23p/IETI_2.git
```

Para ejecutar la aplicación:
```
npm install

npm start
```

## Part 1: Create a Login Component

![](/img/1.jpg)

## Part 2: Enable App Navigation

Se modificó el funcionamiento de la función Lambda de TodoAppView:
```
const TodoAppView = () => {
	if (!this.state.isLoggedIn) return <Redirect to="/" />
        return <TodoApp/>
    };
```

Cuando isLoggedIn es ```false```, no se permite la navegación a ```/todo```:

![](/img/2.jpg)

Cuando isLoggedIn es ```true```, se permite la navegación a ```/todo```:

![](/img/3.jpg)

## Part 3: Local Storage


# Autores

- [Diego Alejandro Puerto Gómez](https://github.com/Diego23p)
