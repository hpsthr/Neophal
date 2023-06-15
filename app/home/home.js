import {compiler} from "@/next.config";
import classes from "./home.module.css"
import Image from "next/image"
import {useTransform, motion, useScroll,useMotionValue} from "framer-motion"
import {useState, useEffect, useRef,} from 'react'


const Home = () => {
    
    const ref = useRef(null);
    const limValue = 200;
    const {scrollYProgress} = useScroll({target: ref});
    const v1 = 0.035;
    const v2 = 0.11;
    const v3 = 0.5;
    const uVal = 450;
    const vA1 = 420;
    const vA2 = vA1 + uVal;
    const vA3 = vA2 + uVal;
    const vA4 = vA3 + uVal;
    const vA5 = vA4 + uVal;
    const faVal = 640;
    const faVal2 = 2000;
    const faVal3 = 2600;
    const faVal4 = 900;
    const tVal = "97vh";
    
    const dSize = "17vh"
    let mxPosition = 0;
    let myPosition = 0;
    const yVal = useTransform(scrollYProgress, [v1, 0], [limValue, 0]) // when we have extrapolate value we used this
    const y2Val = useTransform(scrollYProgress, [v2, v1], [700,(limValue - 1)]) // 
    const fixVal = useTransform(scrollYProgress, [1, 0], [3000, 0])
    const appleVal = useTransform(scrollYProgress, [0.20, 0.37], [0, 320])
    const y1Val = useTransform(scrollYProgress, [0, v1], [0, -(limValue)])
    const xVal = useTransform(scrollYProgress, [v2, 0], [250, 0.1])
    // const sVal = useTransform(scrollYProgress, [0.05, 0.20], [1, 10])
    // const snVal = useTransform(scrollYProgress, [0.22, 0.25], [1, 0])
    const sVal = 1
    const snVal = 1
    
    const oVal2 = useTransform(scrollYProgress, [0.73, 0.74], [0, 1])
    const oVal3 = useTransform(scrollYProgress, [0.93, 0.94], [0, 1])
    const mColor = "white"
    const wDth = "500"
    const [yvalue,setYvalue] = useState(0)
    const [avalue,setAvalue] = useState(0)
    const [dim, setDim] = useState({width:0, height:0})
    
    

    useEffect(() => {
        setDim({width:window.innerWidth, height:window.innerHeight})
        addEventListener("scroll", () => {
            setYvalue(yVal.current > limValue - 1 ? y2Val.current: yVal.current);
            setAvalue(fixVal.current);
            setDim({width:window.innerWidth, height:window.innerHeight})
        })}, [])
        const x = useMotionValue(100);
        const y = useMotionValue(100);
        const rotateX = useTransform(x, [0, dim.width], [100, 0]);
        const rotateY = useTransform(y, [0, dim.height], [100, 0]);
        const cSize = dim.width <= 600 ? "16vw" :  "29vh";
        const handleMouse = (event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            x.set(event.clientX + rect.left);
            y.set(event.clientY+ rect.top);
            }


    return (

        <div ref={ref} className={classes.Home}>
            <video
                autoPlay
                loop
                muted
                src={require("./Assets/video2.mp4")}
                type="video/mp4"
                className={classes.Video}></video>
            <motion.div className={classes.Vidcon}>
                
                <div>
                    <h1 className={classes.Slide1}>

                   <span>
                    NE
                   </span>
                    <span 
                   
                    >
                    
                        <motion.div
                        style={{
                            display:"block",
                            position:"relative",
                            width:cSize,
                            height:cSize,
                            
                            marginLeft:"1vw",
                            zIndex:1,
                            borderRadius:"50%",
                            // translateY: yvalue >= (limValue - 1)
                            //     ? y2Val
                            //     : yVal,
                            // translateX: dim.width <= 600 ? xVal.current/2.5 : xVal,
                            scale: sVal,
                            opacity: snVal,
                            pointerEvents:"none",
                            // transition:"0.2s",
                            // transitionTimingFunction: "ease-in ease-out"

                        }}
                        >
                            <svg width= {cSize} height={cSize} viewBox="0 0 247 247" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M123.718 246.692C191.734 246.692 246.871 191.555 246.871 123.539C246.871 55.5234 191.734 0.385742 123.718 0.385742C55.7021 0.385742 0.564453 55.5234 0.564453 123.539C0.564453 191.555 55.7021 246.692 123.718 246.692ZM124.222 184.106C157.672 184.106 184.789 156.763 184.789 123.034C184.789 89.3051 157.672 61.9622 124.222 61.9622C90.7718 61.9622 63.6549 89.3051 63.6549 123.034C63.6549 156.763 90.7718 184.106 124.222 184.106Z" fill="white"/>
                            </svg>

                        </motion.div>
                        
                    </span>
                    <span>
                        PHAL
                    </span>
                </h1>   
                </div>
                
            </motion.div>
           
                
                <div
                className={classes.Slide2}
                >
                    
                    <div className={classes.Sl2b1}>
                    <motion.div className={classes.Logo} style={{opacity:1 }}>
                        <Image style={{position:"relative"}}
                        src="/logo2.png"
                        width={dim.width < 600 ? dim.width/4 :dim.width/10}
                        height={dim.width < 600 ? dim.height/4 : dim.width/10}
                        alt="neophal-pps"
                        />
                    
                    
                    </motion.div>
                    
                    <Image
                    src="/img_01.png"
                    width={dim.width < 600 ? dim.height/2 :dim.width}
                    height={dim.width < 600 ? dim.width/2 : dim.height}
                    alt="neophal-pps"
                    />
                    </div>
                    <motion.div className={classes.Sl2b2} onMouseMove={handleMouse}>
                    <motion.div
                    style={{
                        position:"absolute",
                        top:dim.width < 600 ? "-12vh" :"-22vh",
                        left:dim.width < 600 ? "70vw" :"82vw",
                        width:dim.width < 600 ? dim.width/2.5 : dim.width/4.5,
                        zIndex:0,
                        rotateZ:186,
                        translateY:dim.width < 600 ? 0 : rotateY,
                        translateX:dim.width < 600 ? 0 : rotateX,
                        
                    }}
                    >
                    <Image
                    src="/img_033.png"
                    width={dim.width < 600 ? dim.width/1 :dim.width/4}
                    height={dim.width < 600 ? dim.height/1 : dim.width/4}
                    alt="neophal-pps"
                    />
                    </motion.div>
                    <motion.div
                    style={{
                        position:"absolute",
                        top:dim.width < 600 ? "42vh" :"27vh",
                        left:dim.width < 600 ? "-4vw" :"-6vw",
                        width:dim.width < 600 ? dim.width/2.5 :dim.width/4.5,
                        zIndex:0,
                        rotateZ:5,
                        translateY:dim.width < 600 ? 0 : rotateX,
                        translateX:dim.width < 600 ? 0 : rotateY,
                        
                        }}>
                    <Image
                    src="/img_033.png"
                    width={dim.width < 600 ? dim.width/1 :dim.width/4}
                    height={dim.width < 600 ? dim.height/1 : dim.width/4}
                    alt="neophal-pps"
                    />
                    </motion.div>
                    <motion.h1><motion.span style={{ display:"inline-block",
                        translateY: fixVal.current >= faVal ? 0 : "15vh",
                        transition:"0.4s",
                        }}>
                            About
                        </motion.span></motion.h1>
                    <div style={{position:"relative" ,top:dim.width < 600 ? 0 :"3vh", left:dim.width < 600 ? 0 :"8vw"}}>
                    <motion.h2><motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                    With an aim to reduce food wastage, Neophal&#39;s innovations in 
                    </motion.span></motion.h2>
                    <motion.h2> <motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                    cold storage and primary processing technologies has the 
                    </motion.span></motion.h2>
                    <motion.h2> <motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                     potential to bring radical changes in the sector. With these
                     </motion.span></motion.h2>
                    <motion.h2> <motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                     innovations, growers would have access to quality storage and 
                     </motion.span></motion.h2>
                    <motion.h2> <motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                     high-tech grading and packing solutions at their farmgate. This 
                     </motion.span> </motion.h2>
                    <motion.h2> <motion.span style={{translateY: fixVal.current >= faVal+30 ? 0 : "3vh",}}>
                     in turn would help them get better realisation of their produce.  
                     </motion.span> </motion.h2>
                    </div>
                    
                    </motion.div>

                </div>
            
            <div
            className={classes.Slide3}>
                
                <div className={classes.Sl3b1}>
                    <div>
                    <motion.h1><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : dim.width < 600 ? "8vh" : "15vh"}}>
                        Bringing AI in
                    </motion.span></motion.h1>
                    <motion.h1><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : dim.width < 600 ? "8vh" : "15vh"}}>
                        Cold Chain
                    </motion.span></motion.h1>
                    </div>
                <div
                style={{position:"relative", top: dim.width < 600 ? 0 :"6vh", left:dim.width < 600 ? 0 : "8vw"}}
                >
                <motion.h2><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : "3vh",}}>
                AI technology integrates into temperature-sensitive product 
                </motion.span></motion.h2>
                <motion.h2><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : "3vh",}}>
                transportation and storage, enhancing efficiency and minimizing 
                </motion.span></motion.h2>
                <motion.h2><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : "3vh",}}>
                spoilage. Real-time monitoring and predictive modeling enable optimal
                </motion.span></motion.h2>
                <motion.h2><motion.span style={{translateY: fixVal.current >= faVal4 ? 0 : "3vh",}}>
                temperature control, ensuring product safety and preventing losses.  
                </motion.span></motion.h2>
                </div>
                
                
                </div>

                <motion.div 
                className={classes.Sl3b2}>
                    <Image
                    style={{
                        position:'relative',
                        display:"inline"
                     }}
                     src={dim.width < 600 ? "/img_04m.png" : "/img_04.png"}
                     width={dim.width < 600 ? dim.width/1.2 :dim.width}
                     height={dim.height/1.9}
                     alt="neophal-app"
                    />
                </motion.div>
                
                
                
                
            </div>
            <div className={classes.Slide4}>
                <div className={classes.Sl4b1}>
                    <motion.div className={classes.ImgAnimation1}
                    style={{
                        translateX: fixVal.current > 2000 ? dim.width < 600 ? "100vw" : "50vw" : 0,
                    }}
                    ></motion.div>
                <Image
                    src="/img_052.png"
                    width={dim.width < 600 ? dim.width/1.2 :dim.width/1.8}
                    height={dim.height}
                    alt="neophal-app"
                    />
                </div>
            
                <div className={classes.Sl4b2} >
                <h1><motion.span style={{translateY: fixVal.current >= faVal2 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Dynamic
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2 +10 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Controlled 
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2+20 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Atmosphere
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2+30 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Storage
                </motion.span></h1>
                <motion.h2 style={{opacity:oVal2}}>
                Neophal utilises `Artificial Intelligence` to keep an eye on and manage the microclimate inside the storages to provide the ideal environment for the produce to survive long and be healthy without losing any of their nutritional content. The conditions of the atmosphere including temperature, moisture, oxygen and other critical elements are dynamically controlled to preserve the quality of the fruits stored inside these storages.                
                </motion.h2>
                </div>
                                
                    
            </div>
            <div className={classes.Slide5}>
                <div className={classes.Sl5b1}>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Primary
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3 +10 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Processing
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3+20 ? 0 : dim.width < 600 ? "8vh" :"13vh",}} >
                    Solutions
                </motion.span></h1>
                <motion.h2 style={{opacity:oVal3}}>
                Neophal uses the latest of technologies for automation in sorting, grading and packing of fruits and vegetables. The use of these technologies eliminates human error and bring efficiency in the process.
                </motion.h2>
                </div>
                <div className={classes.Sl5b2}>
                <motion.div className={classes.ImgAnimation1}
                style={{translateX: fixVal.current > 2600 ? dim.width < 600 ? "-100vw" : "-50vw" : 0 ,backgroundColor:"white"}}>
                </motion.div>

                <Image
                
                    src="/img_062.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/1.8}
                    height={dim.height} 
                    alt="neophal-pps"
                    />
                </div>
            </div>
            
            <footer className = {classes.Mfooter} >
                <div className = {classes.Footer} >
                <div style={{display:"none",top:"3vh"}}>
                <Image
                style={{position:"relative"}}
                    src="/logo2.png"
                    width={dim.width < 600 ? 0 :dim.width/6}
                    height={dim.width < 600 ? 0 : dim.width/7}
                    alt="neophal-pps"
                    />
                </div>
                <div className={classes.Contact}>
                <div>
                     <h2 style={{ fontSize:"2.8vh", fontWeight:700,}} >Contact </h2>
                     <h2>Amit Howladar </h2>
                     <a href="mailto:amit@neophal.com"> amit@neophal.com </a>
                     <h2>+91 74900 37158 </h2>
                </div>
                <div className={classes.Address}>
                <h2> <span style={{ fontSize:"2.8vh", fontWeight:700,}}>
                    Address:
                    </span> <br/> 
                    Plot no. 337, <br/> 
                    Industrial Area phase 2, <br/>  
                    Chandigarh 160002
                     </h2>
                </div>
                </div>
                </div>
            </footer>
        </div>

    );
}

export default Home;