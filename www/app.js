import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';

document.getElementById('alertButton').addEventListener('click', () => {
  if (window.Capacitor) {
    const { Dialog } = window.Capacitor.Plugins;
    Dialog.alert({
      title: 'Capacitor Alert',
      message: 'Hello from Capacitor!',
    }).catch(err => {
      console.error('Failed to show alert', err);
    });
  } else {
    alert('Hello from the web!');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // Criar uma cena
  const scene = new THREE.Scene();

  // Criar uma câmera
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 5;

  // Criar um renderizador e anexá-lo ao canvas
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('threeCanvas') });
  renderer.setSize(400, 400);
  renderer.setClearColor(0xf0f0f0); // Define o fundo branco

  // Criar um cubo
  const geometry = new THREE.BoxGeometry();
  const edges = new THREE.EdgesGeometry(geometry);
  const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000 }); // Cor das linhas do wireframe
  const cubeWireframe = new THREE.LineSegments(edges, lineMaterial);
  scene.add(cubeWireframe);

  // Função de animação
  function animate() {
    requestAnimationFrame(animate);

    // Rodar o cubo
    cubeWireframe.rotation.x += 0.01;
    cubeWireframe.rotation.y += 0.01;

    // Renderizar a cena
    renderer.render(scene, camera);
  }

  // Iniciar a animação
  animate();
});
