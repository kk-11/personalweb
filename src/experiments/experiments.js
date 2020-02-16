import React from 'react';
import * as THREE from 'three';
import s from './experiments.module.css';


export default class Experiments extends React.Component {
	constructor(props) {
		super(props);
		this.init = this.init.bind(this);
		this.animate = this.animate.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.cloudParticles = [];
	}

	componentDidMount() {
		document.addEventListener('mousemove', this.handleMouseMove);
		this.init();
	}

	handleMouseMove(evt) {
		// this.x = -(evt.clientX / window.innerWidth) * 2;
		// this.y = -(evt.clientY / window.innerHeight) * 3;
	}

	init() {
		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(60, this.$view.clientHeight / this.$view.clientWidth, 1,1000);
		this.camera.position.z = 1;
		this.camera.rotation.x = 1.16;
		this.camera.rotation.y = -0.12;
		this.camera.rotation.z = 0.27;
		const ambient = new THREE.AmbientLight(0x555555);
		this.scene.add(ambient);
		const directionalLight = new THREE.DirectionalLight(0xffeedd);
		directionalLight.position.set(0,0,1);
		this.scene.add(directionalLight);
		this.flash = new THREE.PointLight(0x062d89, 30, 500, 1.7);
		this.flash.position.set(200, 300, 100)
		this.scene.add(this.flash)
		this.rainGeo = new THREE.Geometry();
		for(let i=0;i<15000;i++) {
			const rainDrop = new THREE.Vector3(
				Math.random() * 400 -200,
				Math.random() * 500 - 250,
				Math.random() * 400 - 200
			);
			rainDrop.velocity = {};
			rainDrop.velocity = 0;
			this.rainGeo.vertices.push(rainDrop);
		}

		const rainMaterial = new THREE.PointsMaterial({
			color: 0xaaaaaa,
			size: 0.2,
			transparent: true
		});

		this.rain = new THREE.Points(this.rainGeo,rainMaterial);
		this.scene.add(this.rain);

		this.renderer = new THREE.WebGLRenderer();
		this.scene.fog = new THREE.FogExp2(0x11111f, 0.002);
		this.renderer.setClearColor(this.scene.fog.color);


		this.renderer.setSize(this.$view.clientWidth, this.$view.clientHeight);
		this.$view.appendChild(this.renderer.domElement);
		let loader = new THREE.TextureLoader();
		loader.load('/smoke.png', (texture) => {
			const cloudGeo = new THREE.PlaneBufferGeometry(500, 500);
			const cloudMat = new THREE.MeshLambertMaterial({
				map: texture,
				transparent: true
			});
			for (let p=0; p<25; p++) {
				let cloud = new THREE.Mesh(cloudGeo, cloudMat);
				cloud.position.set(
					Math.random()*800 - 400,
					500,
					Math.random()*500 - 450,
				);
				cloud.rotation.x = 1.16;
				cloud.rotation.y = -0.12;
				cloud.rotation.z = Math.random()*360;
				cloud.material.opacity = 0.6;
				this.cloudParticles.push(cloud);
				this.scene.add(cloud);
			}
		});
		this.animate();
	}

	animate() {
		this.cloudParticles.forEach(cloud => {
			cloud.rotation.z -= 0.002;
		});
		this.rainGeo.vertices.forEach(p => {
			p.velocity -= 0.1 + Math.random() * 0.1;
			p.y += p.velocity;
			if (p.y < -200) {
				p.y = 200;
				p.velocity = 0;
			}
		});
		this.rainGeo.verticesNeedUpdate = true;
		this.rain.rotation.y += 0.02;
		// this.camera.rotation.x = this.x;
		// this.camera.rotation.y = this.y;
		if (Math.random() > 0.93 || this.flash.power > 100) {
			if (this.flash.power < 100) {
				this.flash.position.set(
					Math.random()*400,
					300 + Math.random()*200,
					100
				);
			}
			this.flash.power = 50 + Math.random()*500;
		}
		this.renderer.render(this.scene, this.camera);
		requestAnimationFrame(this.animate);
	}

	render() {
		return (
			<section
				className={s.view}
				ref={ref => this.$view = ref}
			>
			</section>
		);
	}
}
