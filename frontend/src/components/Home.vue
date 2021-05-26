<template>
    <div ref="canvas">
        <body>
            <div class="container">
                <div class="content">
                    <h1>Welcome to KeyNode!</h1>
                    <p><router-link to="./Register">Register</router-link><br><br><br>
                        
                        <router-link to="./Play">Play Game</router-link><br><br><br>
                        <router-link to="./Login">Login</router-link><br><br><br>
                        <router-link to="./User">Users</router-link><br><br><br>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstleyVEVO">Bulatov Mode</a><br><br><br>
                    </p> 
                </div>
            </div>
            <canvas class="webgl"></canvas>
            <component v-bind:is="script" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js" integrity="sha512-cdV6j5t5o24hkSciVrb8Ki6FveC2SgwGfLE31+ZQRHAeSRxYhAQskLkq3dLm8ZcWe1N3vBOEYmmbhzf7NTtFFQ==" crossorigin="anonymous"></component>
            <component v-bind:is="script" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/CSSRulePlugin.min.js" integrity="sha512-0bzaetZStCnsUgbCtGVxftzF/L32PNOnrMlYLXwBOKl8cUjTSSDfJVyyJsNwGoI0iE0WUqni2eEfO35kJjFj5g==" crossorigin="anonymous"></component>
        </body>
    </div>
</template>

<script>
import Vue from 'vue'
import VS2 from 'vue-script2'
 
Vue.use(VS2)
// import { Clock, PerspectiveCamera, Scene, WebGLRenderer } from 'three'
import * as THREE from 'three'
import TrackballControls from 'three-trackballcontrols'
import {
    BloomEffect,
    EffectComposer,
    GlitchPass,
    EffectPass,
    RenderPass
} from 'postprocessing'

export default {
    name: 'Home',
    data: function() {
        const scene = new THREE.Scene()
        // const composer = new THREE.EffectComposer(new WebGLRenderer())
        // const effectPass = new THREE.EffectPass(camera, new BloomEffect())
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        const loader = new THREE.TextureLoader();
        const font_loader = new THREE.FontLoader()
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const light = new THREE.DirectionalLight('hsl(0, 100%, 100%)')
        const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 )
        const knot_geo = new THREE.TorusKnotGeometry( 5, 3, 50, 5 );
        const knot_geo_1 = new THREE.TorusKnotGeometry( 7, 5, 30, 10 );
        const sph_geometry = new THREE.SphereGeometry( 3, 10, 10 )
        const sph_geometry_1 = new THREE.SphereGeometry( 5, 50, 50 )

        const material = new THREE.PointsMaterial({
            size: 0.008,
            color: '#000000'
        })
        const sph_material = new THREE.PointsMaterial({
            map: loader.load('./Derevyago.png'),
            size: 0.05,
            transparent: true
           // color: '#FFC0CB'
        })
        const sph_material_1 = new THREE.PointsMaterial({
            size: 0.05,
            color: '#FFC0CB'
        })
        const knot_material = new THREE.PointsMaterial({
            map: loader.load('./cool_k.png'),
            size: 0.05,
            transparent: true
        })
        const knot_material_1 = new THREE.PointsMaterial({
            map: loader.load('./N.png'),
            size: 0.05,
            transparent: true
        })
        const knot_material_2 = new THREE.PointsMaterial({
            map: loader.load('./E.png'),
            size: 0.05,
            transparent: true
        })

        const knot_thorus = new THREE.Points(knot_geo, knot_material)
        const knot_thorus_1 = new THREE.Points(knot_geo, knot_material_1)
        const knot_thorus_2 = new THREE.Points(knot_geo_1, knot_material_2)
        const thorus = new THREE.Points(geometry, material)
        const sphere = new THREE.Points(sph_geometry, sph_material)
        const sphere_1 = new THREE.Points(sph_geometry_1, sph_material_1)

        return {
            scene: scene,
            camera: camera,
            loader: loader,
            font_loader: font_loader,
            controls: [],
            renderer: renderer,
            light: light,
            knot_thorus: knot_thorus,
            knot_thorus_1: knot_thorus_1,
            knot_thorus_2: knot_thorus_2,
            thorus: thorus,
            sphere: sphere,
            sphere_1: sphere_1,
            //axes: axes,
            thorus_speed: 0.01,
            sphere_speed: 0.001,
            sphere_speed_1: 0.01
        }
    },
    created: function() {
        this.scene.add(this.camera)
        this.scene.add(this.light)
        this.scene.add(this.knot_thorus)
        this.scene.add(this.knot_thorus_1)
        this.scene.add(this.knot_thorus_2)
        this.scene.add(this.thorus)
        this.scene.add(this.sphere)
        //this.scene.add(this.sphere_1)
        this.scene.add(this.axes)
        this.renderer.setSize(window.innerWidth, window.innerHeight)
        this.light.position.set(0, 0, 10)
        this.camera.position.z = 2
        this.camera.position.x = 0.2
        this.camera.position.y = 0.2
        this.scene.background = new THREE.Color('hsl(100%, 100%, 100%)')
        // this.controls = new TrackballControls(this.camera)
        // this.controls.rotateSpeed = 1.0
        // this.controls.zoomSpeed = 5
        // this.controls.panSpeed = 0.8
        // this.controls.noZoom = false
        // this.controls.noPan = false
        // this.controls.staticMoving = true
        // this.controls.dynamicDampingFactor = 0.3
    },
    mounted: function() {
        this.$refs.canvas.appendChild(this.renderer.domElement)
        this.animate()
        this.particles_animation()
    },
    methods: {
        animate: function() {
            requestAnimationFrame(this.animate)
            this.renderer.render(this.scene, this.camera)
            this.thorus.rotation.y += this.thorus_speed
            this.sphere.rotation.x += this.sphere_speed
            this.sphere_1.rotation.x -= this.sphere_speed_1
            this.knot_thorus.rotation.y += this.sphere_speed
            this.knot_thorus_1.rotation.x += this.sphere_speed
            this.knot_thorus_2.rotation.z += this.sphere_speed
            //this.controls.update()
        }
    },
    computed: {
        rotate: function() {
            if (this.thorus_speed === '') {
                return 0
            } else {
                return this.thorus_speed
            }
        }
    }
}
</script>


<style scoped>
.webgl
{
    color: #000000;
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    display: grid;
    place-content: left;
    max-width: 100%; 
}

.container{
    color: #000000;
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100vh  !important;
    display: grid;
    place-content: start space-evenly;;
    max-width: 100%; 
    padding: 5%;
}


.v-application h1{
    font: 12pt cursive;
    font-size: 5rem;
    width: 80vw;
    line-height: 97%;
    text-align: center;
    color: #000000;
    border-bottom: 2px solid;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;   
}

.v-application p{
    text-align: right;
}
.v-application a {
    color: black; /* color: #2ad1c9;  */
    text-decoration: none;
    font: 12pt cursive;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;   
    font-size: 3rem;
    width: 50vw;
    line-height: 97%;
}
</style>