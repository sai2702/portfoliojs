import React, { useState, useEffect } from 'react';

import * as THREE from 'three';

// import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
// import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

import { 
  Canvas, 
  // useLoader,
  // useFrame, extend, 
} from '@react-three/fiber';

// import { ScrollPanel } from 'primereact/scrollpanel';

import { Row, Col } from 'react-bootstrap';

import { 
  OrbitControls, MeshWobbleMaterial, 
  // Decal,
  MeshDistortMaterial, Center, Environment
} from '@react-three/drei';

import { UserState } from '../dataContext.jsx';
// import typewriter from './assets/fonts/Typewriter_Bold.json';
// import helvetiker from "three/examples/fonts/helvetiker_regular.typeface.json";

// function MovingSpot({ vec = new THREE.Vector3(), ...props }) {
//   const light = React.useRef();

//   const viewport = useThree((state) => state.viewport);
  
//   useFrame((state) => {
//     light.current.target.position.lerp(vec.set((state.mouse.x * viewport.width) / 2, (state.mouse.y * viewport.height) / 2, 0), 0.1)
//     light.current.target.updateMatrixWorld()
//   });
  
//   return <SpotLight castShadow ref={light} penumbra={1} distance={6} angle={0.35} attenuation={5} anglePower={4} intensity={2} {...props} />
// };

function Home() {
  const { theme } = UserState();

  const [text, setText] = useState('');

  const textArr = [
    "I'm a React developer", 
    "I'm a Tech Enthusiast", 
    "Learning Three JS & Node JS",
    "Learning Unreal Engine & AR/VR"
  ];

  function setRandomName() {
    const index = Math.floor(Math.random() * textArr.length);
    
    let newText = textArr[index];

    if(newText===text){ 
      setRandomName() 
    }else{ 
      setText(newText) 
    }

    return
  };

  useEffect(() => {
    setTimeout(() => {setRandomName()}, 2500);
  }, [text]);

  useEffect(() => {
    document.title = 'Welcome to S.A.V.D Home';
  }, []);

  // extend({ TextGeometry });

  // const Donut = () => {
  //   const dummy = new THREE.Object3D();
  //   const donutRef = useRef();
  
  //   useFrame(({ clock }) => {
  //     const time = clock.getElapsedTime();
  //     donutRef.current.rotation.x = Math.sin(time/4);
  //     donutRef.current.rotation.y = Math.sin(time/2);
  //     let i = 0;
  //     const amount = 10;
  //     const offset = (amount - 1)/2;
  
  //     for (let x=0; x<amount; x++) {
  //       for (let y=0; y<amount; y++) {
  //         for (let z=0; z<amount; z++) {
  //           dummy.position.set(offset-x, offset-y, offset-z);
  //           dummy.rotation.y = Math.sin(x / 2 + time) + Math.sin(y / 3 + time) + Math.sin(z / 4 + time);
  //           dummy.rotation.z = dummy.rotation.y * 1.5;
  //           dummy.updateMatrix();
  
  //           donutRef.current.setMatrixAt(i++, dummy.matrix);
  //         };
  //         donutRef.current.instanceMatrix.needsUpdate = true;
  //       };
  //     };
  //   });
    
  //   return(
  //     <instancedMesh ref={donutRef} args={[null, null, 1000]} scale={0.25} position={[3, 0, 0]}>
  //       <torusGeometry args={[8, 0.2, 10, 100]} />
  //       <meshPhysicalMaterial color='silver' wireframe />
  //     </instancedMesh>
  //   );
  // };

  // const Title = () => {
  //   const fonts = new FontLoader().parse(helvetiker);

  //   return(
  //     <group>
  //       <mesh position={[-2.9,0,0]} rotation={[0, Math.PI/8, 0]} scale={[0.5, 0.5, 0.1]}>
  //         <textGeometry args={
  //           ["SAI AKHIL", {
  //             font: fonts, size:1, height: 1, curveSegments: 10,
  //             bevelEnabled: true, bevelThickness: 0.75,
  //             bevelSize: 0.05, bevelOffset: 0, bevelSegments: 2
  //           }]
  //         }/>
  //         <meshLambertMaterial color={'dodgerblue'}/>
  //       </mesh>

  //       <mesh position={[-2.9,-0.75,0]} rotation={[0, Math.PI/8, 0]} scale={[0.5, 0.5, 0.1]}>
  //         <textGeometry args={
  //           ["VARMA DATLA", {
  //             font: fonts, size:1, height: 1, curveSegments: 10,
  //             bevelEnabled: true, bevelThickness: 0.75,
  //             bevelSize: 0.05, bevelOffset: 0, bevelSegments: 2
  //           }]
  //         }/>
  //         <meshLambertMaterial color={'dodgerblue'}/>
  //       </mesh>
  //     </group>
  //   );
  // };

  // const x = 0, y = 0;
  // const heartShape = new THREE.Shape();
  // heartShape.moveTo( x + 5, y + 5 );
  // heartShape.bezierCurveTo( x + 5, y + 5, x + 4, y, x, y );
  // heartShape.bezierCurveTo( x - 6, y, x - 6, y + 7,x - 6, y + 7 );
  // heartShape.bezierCurveTo( x - 6, y + 11, x - 3, y + 15.4, x + 5, y + 19 );
  // heartShape.bezierCurveTo( x + 12, y + 15.4, x + 16, y + 11, x + 16, y + 7 );
  // heartShape.bezierCurveTo( x + 16, y + 7, x + 16, y, x + 10, y );
  // heartShape.bezierCurveTo( x + 7, y, x + 5, y + 5, x + 5, y + 5 );
  
  // const ReactModel = () => {
  //   const { scene } = useGLTF('/models/react_logo.glb');

  //   return <primitive object={scene} scale={0.15} position={[-0.75, 0, 0]} />
  // };

  // const ThreeModel = () => {
  //   const { scene } = useGLTF('/models/three.js_logo.glb');

  //   return <primitive object={scene} scale={0.005} position={[0.75, 0, 0]} />
  // };


  // const items = [
  //   { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0' },
  //   { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
  //   { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
  //   { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
  // ];

  // const customizedMarker = (item) => {
  //   return (
  //     <span className="custom-marker shadow-1" style={{ backgroundColor: item.color }}>
  //       <i className={item.icon}></i>
  //     </span>
  //   );
  // };

  // const customizedContent = (item) => {
  //   return (
  //     <Card title={item.status} subTitle={item.date}>  
  //       <p></p>
  //     </Card>
  //   );
  // };

  // const ReactMap = useLoader(THREE.TextureLoader, 'react.png');

  // const ThreeMap = useLoader(THREE.TextureLoader, 'three.png');

  // const FirebaseMap = useLoader(THREE.TextureLoader, 'firebase.png');

  // const WebXRMap = useLoader(THREE.TextureLoader, 'webxr.png');

  return (
    <React.Fragment>
      <div style={{position: 'absolute', zIndex: '500', color: '#fff', width: '100%', height: '100vh', overflow: 'hidden'}} >
        <div style={theme===false ? {paddingLeft: '2.5vw', marginTop: '5vh', color: 'black'} : {paddingLeft: '2.5vw', marginTop: '5vh', color: 'ghostwhite'}}>
          <div style={{fontSize: '35px', fontWeight: '400'}}>Hi There,</div>

          <div style={{fontSize: '27px', fontWeight: '600', marginTop: '4.5px', display: 'flex'}}>
            <span style={{fontStyle: 'italic', fontFamily: 'cursive'}}>Sai Akhil Varma Datla</span> 
            {/* <div style={{marginLeft: '5px', marginTop: '-5px'}} className='yin-yang'></div> */}
            <div style={{paddingLeft: '5px', marginTop: '15px'}} className='infinity'></div><span>✌</span>
          </div>

          <div style={theme===false ? {fontSize: '25px', fontWeight: '600', marginTop: '10px', width: 'max-content', color: 'seagreen'} : {fontSize: '25px', fontWeight: '600', marginTop: '10px', width: 'max-content', color: 'aquamarine'}} className='typing'>            
            {text}
          </div>

          <div className='social_links'>
            <a href='https://github.com/savdatla9/' target='_blank'>
              <img src={theme===false?'/github_dark.svg':'/github_light.svg'} />
            </a>

            <a href='https://www.linkedin.com/in/sai-akhil-varma-datla-051b3b158/' target='_blank'>
              <img src={theme===false?'/linkedin_dark.svg':'/linkedin_light.svg'} />
            </a>

            <a href='https://www.instagram.com/d.s.a.varma9/' target='_blank'>
              <img src={theme===false?'/instagram_dark.svg':'/instagram_light.svg'} />
            </a>
          </div>

        </div>
        
        <div style={theme===false ? {paddingLeft: '2.5vw', marginTop: '5vh', color: 'black'} : {paddingLeft: '2.5vw', marginTop: '5vh', color: 'silver'}}>
          <h3 style={{textDecorationLine: 'underline'}}>Skills</h3>

          <Row>
            <Col xs={4} sm={2}>
              <img src={'html.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            <Col xs={4} sm={2}>
              <img src={'css.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            <Col xs={4} sm={2}>
              <img src={'js.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            <Col xs={4} sm={2}>
             <img src={'react.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            {/* <Col xs={3} sm={2}> */}
              {/* <Canvas>
                <ambientLight intensity={0.5} />

                <OrbitControls />

                <mesh scale={1.75}>
                  <circleGeometry />
                  <MeshDistortMaterial side={THREE.DoubleSide} />
                  <Decal polygonOffsetFactor={-0} position={[0, 0, 0]} scale={1.35} map={ThreeMap} />
                </mesh>
              </Canvas> */}
              {/* <img src={'react.png'} style={{width: '90px', height: 'auto'}} />
            </Col> */}

            <Col xs={4} sm={2}>
              <img src={'three.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            <Col xs={4} sm={2}>
              <img src={'firebase.png'} style={{width: '90px', height: 'auto'}} />
            </Col>

            {/* <Col xs={3} sm={2}> */}
              {/* <Canvas>
                <ambientLight intensity={0.5} />

                <OrbitControls />

                <mesh scale={1.75}>
                  <circleGeometry />
                  <MeshDistortMaterial side={THREE.DoubleSide} />
                  <Decal polygonOffsetFactor={-0} position={[0, 0, 0]} scale={1.35} map={WebXRMap} />
                </mesh>
              </Canvas> */}
              {/* <img src={'metamask2.png'} style={{width: '90px', height: 'auto'}} />
            </Col> */}

            <Col xs={3} sm={2}>
              <img src={'webxr.png'} style={{width: '90px', height: 'auto'}} />
            </Col>
          </Row>
        </div>
      </div>

      <Canvas 
        style={
          theme===false 
          ? {height: '110vh', width: '100%', backgroundColor: '#b0c4de', marginTop: '-10vh'} 
          : {height: '110vh', width: '100%', backgroundColor: '#242424', marginTop: '-10vh'}
        } shadows dpr={[1, 2]} camera={{ fov: 45, near: 1, far: 50 }}
      >
        <hemisphereLight args={theme===false ? ['lightskyblue', 'dodgerblue'] : ['white', 'dimgray']} intensity={1.5} />

        <ambientLight intensity={0.15} />

        <Center>
          <mesh scale={0.5} position={[0, 0.95, 0]}>
            <octahedronGeometry />
            <MeshWobbleMaterial
              side={THREE.DoubleSide}
              wireframe color={'#ff8c00'}
            />
          </mesh>

          <mesh scale={0.5} position={[0, -0.75, 0]} rotation={[0, 0, -90]}>
            <torusKnotGeometry />
            <MeshWobbleMaterial
              side={THREE.DoubleSide}
              wireframe color={'#f0e68c'}
            />
          </mesh>

          <mesh scale={5} position={[0, 0, 0]}>
            <sphereGeometry />
            <MeshDistortMaterial 
              side={THREE.DoubleSide} 
              wireframe 
            />
          </mesh>
        </Center>

        <OrbitControls />

        <Environment preset={theme===true ? 'night' : 'dawn'} />
      </Canvas>
    </React.Fragment>
  );
};

export default Home;
