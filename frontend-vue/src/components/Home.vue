<template>

</template>


<script>
import * as THREE from 'three';
const OrbitControls = require('three-orbit-controls')(THREE)
let container
let camera;
let renderer;
let scene;
let cube;
let cube1;
export default {
  methods: {
    init: function () {
      container = document.querySelector( '#app' );
      this.setScene();
      this.setCamera();
      this.setMaterial();
      this.createLights();
      this.setRender();
    },
    setScene: function () {
      scene = new THREE.Scene();
      const loader = new THREE.TextureLoader();
      const bgTexture = loader.load('https://img1.goodfon.ru/wallpaper/nbig/a/cb/studenty-doska-prepod-formuly.jpg');
			scene.background = bgTexture;
    },
    setCamera: function () {
      camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, 0.1, 100 );
      camera.position.set( 0, 0, 10 );
    },
    setMaterial: function () {
      //Does not work by setting background for scene
      const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );
      const geometry1 = new THREE.TorusGeometry( .9, .05, 16, 100 );
      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load( 'data:image/jpeg;base64,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');
      texture.encoding = THREE.sRGBEncoding;
      texture.anisotropy = 16;
      const material = new THREE.MeshStandardMaterial( {
        map: texture,
      } );
      cube = new THREE.Mesh( geometry, material );
      cube1 = new THREE.Mesh( geometry1, material );
      scene.add( cube, cube1);
    },
    createLights: function () {
      const ambientLight = new THREE.HemisphereLight(
        0xddeeff, // sky color
        0x202020, // ground color
        5, // intensity
      );

      const mainLight = new THREE.DirectionalLight( 0xffffff, 5 );
      mainLight.position.set( 10, 10, 10 );

      scene.add( ambientLight, mainLight );
    },
    setRender: function () {
      renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( container.clientWidth, container.clientHeight );
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.gammaFactor = 2.2;
      renderer.gammaOutput = true;
      renderer.physicallyCorrectLights = true;
      container.appendChild( renderer.domElement );
      renderer.setAnimationLoop(() => {
        this.update();
        this.render();
      });
    },
    update: function () {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      cube.rotation.z += 0.01;
      cube1.rotation.x -= 0.005;
      cube1.rotation.y += 0.005;
      cube1.rotation.z -= 0.005;
    },
    render: function () {
      renderer.render( scene, camera );
    },
    onWindowResize: function () {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize( container.clientWidth, container.clientHeight );
    }

  },
  mounted: function () {
    this.init();
    window.addEventListener( 'resize', this.onWindowResize );
    new OrbitControls(camera, renderer.domElement);
//       controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
// controls.dampingFactor = 1;
// controls.screenSpacePanning = false;
  }
}
</script>

<style>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

