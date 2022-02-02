import React, { useState, useEffect } from 'react'
import styles from '../styles/Background.module.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const makeBackground = () => {
    const scene = new THREE.Scene();
    // FOV in degrees and aspect ratio are the first two args
    // view frustrum, how much the camera can see is last 2 args; set it so can see everything camera can
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000);

    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#bg')

    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);

    
    // making spinning donut
    const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
    const material = new THREE.MeshStandardMaterial( { color: 0xffff00 } );
    const torus = new THREE.Mesh( geometry, material );
    scene.add( torus );

    const pointLight = new THREE.PointLight(0xffffff)
    pointLight.position.set(20, 20, 20);

    scene.add(pointLight);

    // the drawing function
    renderer.render(scene, camera);

    // listens to dom events on mouse and updates camera position 
    const controls = new OrbitControls(camera, renderer.domElement);

    function addStar() {
        const geometry = new THREE.SphereGeometry(0.25, 24, 24);
        const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
        const star = new THREE.Mesh(geometry, material);
        
        // random position for stars
        const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100)); 
        star.position.set(x, y, z);
        scene.add(star);
    }
    Array(200).fill().forEach(addStar);

    // game loop type of function
    function animate () {
        requestAnimationFrame( animate );
    
        torus.rotation.x += 0.01;
        torus.rotation.y += 0.005;
        torus.rotation.z += 0.01;
        
        // allows you to pan around scene
        controls.update();
    
        // the drawing function
        renderer.render(scene, camera);
    }
    animate();
}
const Background = () => {
    
    useEffect(() => {
        makeBackground();
    });

    const greeting = 'Hello Function Component!';


    
    return (
        <div>

        <canvas id="bg"></canvas>

        </div>
       
    );
};
export default Background;