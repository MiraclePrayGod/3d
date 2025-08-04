# 🧍‍♂️ 3D Avatar App (`avatar-3d-app`)

Una aplicación web interactiva de avatares 3D construida con **React**, **TypeScript** y **Three.js** (o React‑Three‑Fiber).  
Este proyecto fue generado con **Create React App** y está preparado para visualizar modelos 3D en navegadores modernos.

---

## 🧪 Tecnologías principales

- ⚛️ **React** + **TypeScript** (≈ 73 %)
- 🧾 **HTML** (≈ 17 %) y **CSS** (≈ 9 %)
- 🧠 Renderizado 3D con **Three.js** o **@react-three/fiber**
- 📦 Bundled con **Webpack / Babel** (incluido por CRA)

---

## 🌟 Funcionalidades básicas

- 💡 Carga de modelos 3D en formato `.glb`, `.gltf` o `.obj`
- 🔍 Controles de cámara: rotación, zoom, desplazamiento
- 🕺 Animaciones básicas: colocar prenda
- 🚀 Despliegue estático fácil con `npm run build`

---

## 🛠️ Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/MiraclePrayGod/3d.git
cd 3d

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm start
```

Visita `http://localhost:3000` (o la URL que indique la terminal).  
La app se recarga automáticamente al guardar cambios.

```bash
# Ejecutar pruebas
npm test
```

Inicia el runner interactivo de **React Testing Library** y **Jest**.

```bash
# Compilar para producción
npm run build
```

Genera una versión optimizada en la carpeta `build/`, lista para desplegar en servidores como GitHub Pages, Netlify o Vercel.

---

## 🚀 Funcionalidades sugeridas (ideas futuras)

| Funcionalidad                                 | Descripción                                                                                   |
|----------------------------------------------|-----------------------------------------------------------------------------------------------|
| 🎯 Vista previa interactiva (GLTF Drag‑and‑Drop) | Permite arrastrar y soltar modelos `.glb`, `.gltf` o `.zip` directamente en la interfaz y verlos renderizados en tiempo real. |
| 💡 Iluminación HDR (PMREM)                    | Carga archivos `.hdr` para iluminación basada en imágenes, logrando un realismo más cinematográfico. |
| 🎨 Editor visual de color / textura           | Personalización dinámica de materiales: prendas.               |
| 📸 Exportar escena (`.glb`, `.png`)           | Botones para capturar imagen o exportar la escena 3D completa.                                |

---

## ⚙️ Configuración adicional

Para instalar las dependencias necesarias para Three.js y React Three Fiber:

```bash
npm install three @types/three @react-three/fiber @react-three/drei
```

> ⚠️ Si ejecutaste `npm run eject`, podrías perder los scripts preconfigurados de Webpack/Babel.  
> Revisa la configuración antes de continuar.

---

## 🤝 Cómo contribuir

```bash
# Haz un fork del repositorio

# Crea una nueva rama para tus cambios
git checkout -b feature/mi-nueva-feature

# Realiza tus cambios y asegúrate de que todo funcione
npm test

# Luego sube tus cambios y crea un pull request
```

---

## 🎯 Próximos pasos

- [ ] Carga interactiva de avatares 3D personalizados  
- [ ] Editor de materiales y texturas en tiempo real  
- [ ] Personalización avanzada: ropa, accesorios  
- [ ] Integración con realidad aumentada (**WebXR** o **AR.js**)

---

## 🙌 Créditos

- Desarrollado con ❤️ usando **React**, **Three.js** y **Create React App**
- Inspirado en demos como: [Three.js Avatar Demo](https://threejs.org/examples/)
