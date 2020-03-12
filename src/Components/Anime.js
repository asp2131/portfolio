import React, { Component } from "react";

import * as THREE from 'three';
import OrbitControls from './OrbitControls';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import MTLLoader from 'three-mtl-loader';
// import OBJLoader from 'three-obj-loader';

// OBJLoader(THREE);


var earthMesh, freedomMesh;
var scene;

class ThreeScene extends Component {
    // constructor(props){
    //     super(props);
    //     this.THREE = THREE;
    // }
    componentDidMount() {
        
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
        this.camera.position.z = 10;
        this.camera.position.y = 0;
        this.camera.position.x = 0;
        

        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.setClearColor("#263238");
        this.renderer.setSize(width, height);
        this.mount.appendChild(this.renderer.domElement);
        const geometry = new THREE.BoxGeometry(1, 10, 0.1);
        const material = new THREE.MeshBasicMaterial({
            color: "#0F0",
            wireframe: true
        });
        this.cube = new THREE.Mesh(geometry);
        // scene.add(this.cube);

        // const controls = new OrbitControls(this.camera, this.renderer.domElement);

        //Add SPHERE
        //LOAD TEXTURE and on completion apply it on box
        var loader = new THREE.TextureLoader();
        loader.load(
            "https://res.cloudinary.com/https-pilot-tune-herokuapp-com/image/upload/v1583947848/28863_ggjdla.png",
            this.onLoad,
            this.onProgress,
            this.onError
        );

        //LIGHTS
        var lights = [];
        lights[0] = new THREE.PointLight(0x304ffe, 1, 0);
        lights[1] = new THREE.PointLight(0xffffff, 1, 0);
        lights[2] = new THREE.PointLight(0xffffff, 1, 0);
        lights[0].position.set(0, 200, 0);
        lights[1].position.set(100, 200, 100);
        lights[2].position.set(-100, -200, -100);
        scene.add(lights[0]);
        scene.add(lights[1]);
        scene.add(lights[2]);

        var video = document.getElementById("video");
        video.src =
            "https://res.cloudinary.com/https-pilot-tune-herokuapp-com/video/upload/v1583960113/ezgif.com-gif-to-mp4_1_kf4fbg.mp4";

        var texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBFormat;
        var imageObject = new THREE.Mesh(
            new THREE.PlaneGeometry(width, height),
            new THREE.MeshBasicMaterial({ map: texture })
        );
        imageObject.scale.set(0.02, 0.02);
        scene.add(imageObject);
        video.setAttribute("crossorigin", "anonymous");
        video.load();
        video.play();

        var mtlLoader = new MTLLoader();
        mtlLoader.setTexturePath("./assets/");
        // load material
        mtlLoader.load(require("../assets/lib/car.mtl"), function (materials) {
            materials.preload();
            console.log("loaded Material");

            // load Object
            var objLoader = new OBJLoader();
            objLoader.setMaterials(materials);
            objLoader.load(
                "../assets/lib/car.obj",
                function (object) {
                    freedomMesh = object;
                    freedomMesh.position.setY(1); //or  this
                    freedomMesh.scale.set(0.2, 0.2, 0.2);
                    scene.add(freedomMesh);
                },
                function (xhr) {
                    console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
                },
                // called when loading has errors
                function (error) {
                    console.log("An error happened" + error);
                }
            );
            // objLoader.load("freedom.obj", function(object) {
            //   freedomMesh = object;
            //   freedomMesh.position.setY(3); //or  this
            //   freedomMesh.scale.set(0.02, 0.02, 0.02);
            //   scene.add(freedomMesh);
            // });
        });
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
    }
    start = () => {
        if (!this.frameId) {
            this.frameId = requestAnimationFrame(this.animate);
        }
    };
    stop = () => {
        cancelAnimationFrame(this.frameId);
    };
    animate = () => {
        this.earthMesh.rotation.y += 0.01;
        this.earthMesh.rotation.x -= 0.01;
        if (freedomMesh) freedomMesh.rotation.y += 0.02;
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
    };
    renderScene = () => {
        if (this.renderer) this.renderer.render(scene, this.camera);
    };

    onLoad = texture => {
        var objGeometry = new THREE.SphereBufferGeometry(3, 39, 35);
        var objMaterial = new THREE.MeshPhongMaterial({
            map: texture,
            flatShading: THREE.FlatShading
        });

        this.earthMesh = new THREE.Mesh(objGeometry, objMaterial);
        // scene.add(this.earthMesh);
        this.renderScene();
        //start animation
        this.start();
    };

    onProgress = xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    };

    // Function called when download errors
    onError = error => {
        console.log("An error happened" + error);
    };

    render() {
        return (
            <div
                style={{ width: "500px", height: "500px" }}
                ref={mount => {
                    this.mount = mount;
                }}
            />
        );
    }
}
export default ThreeScene;
