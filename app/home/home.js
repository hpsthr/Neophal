import {compiler} from "@/next.config";
import classes from "./home.module.css"
import Image from "next/image"
import {useTransform, motion, useScroll} from "framer-motion"
import {useState, useEffect, useRef} from 'react'

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
    const tVal = "97vh";
    const cSize = "30vh"
    const dSize = "17vh"
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
    
    const oVal2 = useTransform(scrollYProgress, [0.73, 0.75], [0, 1])
    const oVal3 = useTransform(scrollYProgress, [0.93, 0.95], [0, 1])
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
            console.log(fixVal.current)
        })}, [])

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
                {dim.width < 600 ? <div>
                    <div className={classes.Mobile}>
                    <Image
                    style={{
                        position:"relative",
                        
                    }}
                        src="/logo.png"
                        width={dim.width < 600 ? dim.width/5 :dim.width/9}
                        height={dim.width < 600 ? dim.height/1.4 : dim.width/4}
                        alt="neophal-pps"
                    />
                    <h1
                    style={{
                        fontSize:"6vh",
                        color:"white"
                    }}
                    >
                        Neophal
                    </h1>
                    <h2
                    style=
                    {{
                        fontSize:"3vh",
                        color:"white",
                        width:"80vw",
                        textAlign:"center"
                    }}
                    >
                        Visit our Desktop Website Mobile site is work in progress 

                    </h2>
                    </div>


                </div> : 
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
                            backgroundColor:"#E9373D",
                            position:"relative",
                            width:dSize,
                            height:dSize,
                            top: "13.7vh",
                            left:"4.2vw",
                            
                            zIndex:2,
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

                        </motion.div>
                        <motion.div
                        style={{
                            display:"block",
                            backgroundColor:"white",
                            position:"relative",
                            width:cSize,
                            height:cSize,
                            top: "-10vh",
                            left:"0vw",
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

                        </motion.div>
                        
                    </span>
                    <span>
                        PHAL
                    </span>
                </h1>   
                </div>}
                
            </motion.div>
           
                
                <div
                className={classes.Slide2}
                >
                    
                    <div className={classes.Sl2b1}>
                    <motion.div
                    className={classes.Logo}
                    style={{
                      opacity:1 
                    }}
                    >

                    
                    <Image
                style={{
                    position:"relative",
                    }}
                    src="/logo2.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/10}
                    height={dim.width < 600 ? dim.height/1.4 : dim.width/10}
                    alt="neophal-pps"
                    />
                    
                    
                    </motion.div>
                    <Image
                    src="/img_01.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width}
                    height={dim.width < 600 ? dim.height/1.4 : dim.height}
                    alt="neophal-pps"
                    />
                    </div>
                    <div className={classes.Sl2b2}>
                    <motion.div
                    style={{
                        position:"absolute",
                        top:"0vh",
                        left:"82vw",
                        zIndex:0,
                        translateY:0
                    }}
                    >
                    <Image
                    src="/img_021.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/5.6}
                    height={dim.width < 600 ? dim.height/1.4 : dim.width/6}
                    alt="neophal-pps"
                    />
                    </motion.div>
                    <motion.div
                    style={{
                        position:"absolute",
                        top:"10vh",
                        left:"0vw",
                        zIndex:2,
                        translateY:appleVal,
                        transition:"0.1s",
                        transitionTimingFunction: "ease-in ease-out"
                        }}>
                    <Image
                    src="/img_03.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/8}
                    height={dim.width < 600 ? dim.height/1.4 : dim.width/8}
                    alt="neophal-pps"
                    />
                    </motion.div>
                    <motion.h1><motion.span
                        style={{
                        display:"inline-block",
                        translateY: fixVal.current >= faVal ? 0 : "15vh",
                        transition:"0.4s",
                        }}>
                            About
                        </motion.span></motion.h1>
                    <div>
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
                    
                    </div>

                </div>
            
            <div
            className={classes.Slide3}>
                <div className={classes.Sl3b1}>
                
                <h1>
                &#39;Bringing AI in <br/>
                 Cold Chain&rsquo;
                </h1>
                
                
                </div>

                <motion.div 
                className={classes.Sl3b2}>
                    <Image
                    style={{
                        position:'relative',
                        display:"inline"
                     }}
                     src="/img_04.png"
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
                        translateX: fixVal.current > 2000 ? "50vw" : 0,
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
                <h1><motion.span style={{translateY: fixVal.current >= faVal2 ? 0 : "13vh",}} >
                    Dynamic
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2 +10 ? 0 : "13vh",}} >
                    Controlled 
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2+20 ? 0 : "13vh",}} >
                    Atmosphere
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal2+30 ? 0 : "13vh",}} >
                    Storage
                </motion.span></h1>
                <motion.h2 style={{opacity:oVal2}}>
                Neophal utilises `Artificial Intelligence` to keep an eye on and manage the microclimate inside the storages to provide the ideal environment for the produce to survive long and be healthy without losing any of their nutritional content. The conditions of the atmosphere including temperature, moisture, oxygen and other critical elements are dynamically controlled to preserve the quality of the fruits stored inside these storages.                
                </motion.h2>
                </div>
                                
                    
            </div>
            <div className={classes.Slide5}>
                <div className={classes.Sl5b1}>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3 ? 0 : "13vh",}} >
                    Primary
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3 +10 ? 0 : "13vh",}} >
                    Processing
                </motion.span></h1>
                <h1><motion.span style={{translateY: fixVal.current >= faVal3+20 ? 0 : "13vh",}} >
                    Solutions
                </motion.span></h1>
                <motion.h2 style={{opacity:oVal3}}>
                Neophal uses the latest of technologies for automation in sorting, grading and packing of fruits and vegetables. The use of these technologies eliminates human error and bring efficiency in the process.
                </motion.h2>
                </div>
                <div className={classes.Sl5b2}>
                <motion.div className={classes.ImgAnimation1}
                style={{translateX: fixVal.current > 2600 ? "-50vw" : 0,}}>
                </motion.div>

                <Image
                
                    src="/img_062.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/1.8}
                    height={dim.height} 
                    alt="neophal-pps"
                    />
                </div>
            </div>
            
            <footer 
            className = {classes.Mfooter}
            >
                <div
                className = {classes.Footer}
                >
                <div
                style={{
                    
                    top:"3vh"
                }}
                >
                <Image
                style={{
                    position:"relative",
                    
                }}
                    src="/logo2.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/6}
                    height={dim.width < 600 ? dim.height/1.4 : dim.width/7}
                    alt="neophal-pps"
                    />
                </div>
                <div className={classes.Contact}>
                <div>
                     <h2
                     style={{
                        fontSize:"2.8vh",
                        fontWeight:700,
                        
                        
                     }}
                     >Contact </h2>
                     <h2>Amit Howladar 
                     </h2>
                     <a href="mailto:amit@neophal.com"> amit@neophal.com </a>
                     <h2>
                     +91 74900 37158
                     </h2>
                     
                </div>
                <div className={classes.Address}>
                <h2>
                    <span 
                    style={{
                        fontSize:"2.8vh",
                        fontWeight:700,
                    }}
                    >Address:</span> <br/> Plot no. 337, <br/> Industrial Area phase 2, <br/>  Chandigarh 160002
                     </h2>
                </div>
                </div>
                </div>
            </footer>
        </div>

    );
}

export default Home;