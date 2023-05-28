import {compiler} from "@/next.config";
import classes from "./home.module.css"
import Image from "next/image"
import {useTransform, motion, useScroll} from "framer-motion"
import {useState, useEffect, useRef} from 'react'

const Home = () => {
    const ref = useRef(null);
    const limValue = 200;
    const {scrollYProgress} = useScroll({target: ref});
    const v1 = 0.05;
    const v2 = 0.12;
    const v3 = 0.46;
    const uVal = 450;
    const vA1 = 420;
    const vA2 = vA1 + uVal;
    const vA3 = vA2 + uVal;
    const vA4 = vA3 + uVal;
    const vA5 = vA4 + uVal;
    const tVal = "97vh";
    const yVal = useTransform(scrollYProgress, [v1, 0], [limValue, 0]) // when we have extrapolate value we used this
    const y2Val = useTransform(scrollYProgress, [v2, v1], [800,(limValue - 1)]) // 
    const fixVal = useTransform(scrollYProgress, [1, 0], [3000, 0])
    const y1Val = useTransform(scrollYProgress, [0, v1], [0, -(limValue)])
    const xVal = useTransform(scrollYProgress, [v2, 0], [200, 0.1])
    const sVal = useTransform(scrollYProgress, [0.08, 0.17], [1, 10])
    const snVal = useTransform(scrollYProgress, [0.17, 0.25], [1, 0])
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
            console.log(fixVal.current)
        })}, [])

    return (

        <div ref={ref} className={classes.Home}>
            <video
                autoPlay
                loop
                muted
                src={require("./Assets/vid1.mp4")}
                type="video/mp4"
                className={classes.Video}></video>
            <motion.div className={classes.Vidcon}>
                <h1 className="">

                    <span>
                        <motion.svg
                            style={{
                            translateY: y1Val,
                            left: "3vw"
                        }}
                            height={dim.width <= 600 ? dim.height/8 :dim.height/1.9}
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.93136 6.67416C2.88152 6.77903 2.80855 6.85768 2.71244 6.91011C2.61989 6.97004 2.50776 7 2.37606 7C2.24435 7 2.11976 6.9588 2.00229 6.8764C1.88483 6.79401 1.78872 6.59551 1.71396 6.2809L1.18536 4.01124C1.13196 3.77903 1.08391 3.5618 1.04119 3.35955C0.998477 3.14981 0.952202 2.91011 0.902367 2.64045L0.870331 2.65169C0.884569 3.05618 0.891688 3.46816 0.891688 3.88764C0.895248 4.30712 0.897028 4.7191 0.897028 5.1236V6.86517C0.857872 6.88764 0.797358 6.91011 0.715487 6.93258C0.637175 6.95506 0.558863 6.96629 0.480551 6.96629C0.402239 6.96629 0.332826 6.95506 0.272312 6.93258C0.211798 6.91011 0.161963 6.86517 0.122807 6.79775C0.0836514 6.73034 0.0533945 6.64045 0.0320367 6.52809C0.0106789 6.40824 0 6.25468 0 6.06742V0.449438C0.0498349 0.299625 0.126367 0.187266 0.229596 0.112359C0.332826 0.0374531 0.443174 0 0.560642 0C0.692349 0 0.816936 0.0449437 0.934404 0.134831C1.05543 0.217228 1.15154 0.411985 1.22273 0.719101L1.75668 2.98876C1.81007 3.22097 1.85813 3.44195 1.90084 3.65168C1.94356 3.85393 1.98984 4.08989 2.03967 4.35955L2.06637 4.34831C2.05213 3.94382 2.04323 3.53933 2.03967 3.13483C2.03611 2.73034 2.03433 2.32584 2.03433 1.92135V0.101124C2.07349 0.0786516 2.13222 0.0561795 2.21053 0.0337074C2.2924 0.0112358 2.3725 0 2.45081 0C2.60743 0 2.72668 0.059925 2.80855 0.179775C2.89042 0.292134 2.93136 0.531835 2.93136 0.898876V6.67416Z"
                                fill={mColor}/>
                            <path
                                d="M3.62394 1.14607C3.62394 0.82397 3.66844 0.569288 3.75743 0.382022C3.84642 0.194757 3.96745 0.101124 4.12051 0.101124H5.88253C5.90745 0.18352 5.92881 0.292135 5.94661 0.426966C5.96796 0.561798 5.97864 0.70412 5.97864 0.853932C5.97864 1.13858 5.94839 1.34082 5.88787 1.46067C5.83092 1.58052 5.75439 1.64045 5.65828 1.64045H4.53165V2.68539H5.73303C5.75794 2.76779 5.7793 2.8764 5.7971 3.01124C5.81846 3.13858 5.82914 3.27715 5.82914 3.42697C5.82914 3.71161 5.80066 3.91386 5.74371 4.03371C5.68675 4.15356 5.61022 4.21348 5.51411 4.21348H4.53165V5.39326H5.90389C5.92881 5.47566 5.95016 5.58427 5.96796 5.7191C5.98932 5.85393 6 5.99625 6 6.14607C6 6.43071 5.96974 6.6367 5.90923 6.76404C5.85228 6.88389 5.77574 6.94382 5.67963 6.94382H4.12051C3.96745 6.94382 3.84642 6.85019 3.75743 6.66292C3.66844 6.47566 3.62394 6.22097 3.62394 5.89888V1.14607Z"
                                fill={mColor}/>
                        </motion.svg>
                    </span>
                    <span >
                        <motion.svg
                            style={{
                            translateY: yvalue >= (limValue - 1)
                                ? y2Val
                                : yVal,
                            translateX: dim.width <= 600 ? xVal.current/2.5 : xVal,
                            scale: sVal,
                        opacity: snVal,
                            left: "25.6vw"
                        }}
                            height={dim.width <= 600 ? dim.height/8 :dim.height/1.9}
                            viewBox="0 0 159 159"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M79.5 159C123.407 159 159 123.407 159 79.5C159 35.5934 123.407 0 79.5 0C35.5934 0 0 35.5934 0 79.5C0 123.407 35.5934 159 79.5 159ZM80 125C105.405 125 126 104.405 126 79C126 53.5949 105.405 33 80 33C54.5949 33 34 53.5949 34 79C34 104.405 54.5949 125 80 125Z"
                                fill={mColor}/>
                        </motion.svg>
                    </span>
                    <span style={{
                        marginLeft: 25
                    }}>
                        <motion.svg
                            style={{
                            translateY: y1Val,
                            left: "53vw"
                        }}
                            height={dim.width <= 600 ? dim.height/8 :dim.height/1.9}
                            viewBox="0 0 12 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.18287 3.29542C1.32877 3.29542 1.43993 3.22538 1.51636 3.08531C1.59626 2.93786 1.63621 2.71669 1.63621 2.4218C1.63621 2.14165 1.59452 1.92786 1.51115 1.78041C1.43125 1.62559 1.31314 1.54818 1.15681 1.54818C1.10123 1.54818 1.05433 1.55187 1.01612 1.55924C0.981379 1.55924 0.944903 1.56661 0.90669 1.58136V3.29542H1.18287ZM0.911901 6.84518C0.873688 6.8673 0.812894 6.88942 0.72952 6.91153C0.649621 6.93365 0.569721 6.94471 0.489821 6.94471C0.409921 6.94471 0.338706 6.92996 0.276176 6.90047C0.217119 6.87836 0.166748 6.83412 0.125061 6.76777C0.0833738 6.70142 0.0521086 6.60927 0.0312651 6.49131C0.0104217 6.37335 0 6.21854 0 6.02686V0.818325C0 0.663507 0.0191065 0.54555 0.0573195 0.464455C0.0990063 0.375987 0.154589 0.30595 0.224067 0.254344C0.34218 0.165877 0.475925 0.103212 0.625303 0.0663505C0.778155 0.0221168 0.931007 0 1.08386 0C1.56326 0 1.92976 0.217483 2.18335 0.652449C2.43695 1.08741 2.56374 1.6772 2.56374 2.4218C2.56374 2.78304 2.53595 3.11111 2.48037 3.406C2.42826 3.69352 2.34836 3.94418 2.24067 4.15798C2.13645 4.3644 2.00271 4.52659 1.83943 4.64455C1.67963 4.75513 1.49378 4.81043 1.28187 4.81043H0.911901V6.84518Z"
                                fill={mColor}/>
                            <path
                                d="M5.85208 6.84518C5.81387 6.8673 5.75307 6.88942 5.6697 6.91153C5.5898 6.93365 5.5099 6.94471 5.43 6.94471C5.3501 6.94471 5.27889 6.92996 5.21636 6.90047C5.1573 6.87836 5.10693 6.83412 5.06524 6.76777C5.02355 6.70142 4.99229 6.60927 4.97145 6.49131C4.9506 6.37335 4.94018 6.21854 4.94018 6.02686V4.30174H3.9397V6.84518C3.90148 6.8673 3.84069 6.88942 3.75732 6.91153C3.67742 6.93365 3.59752 6.94471 3.51762 6.94471C3.43772 6.94471 3.3665 6.92996 3.30397 6.90047C3.24491 6.87836 3.19454 6.83412 3.15286 6.76777C3.11117 6.70142 3.0799 6.60927 3.05906 6.49131C3.03822 6.37335 3.02779 6.21854 3.02779 6.02686V0.187994C3.06601 0.173249 3.1268 0.154818 3.21017 0.132702C3.29355 0.103212 3.37345 0.0884678 3.44987 0.0884678C3.52977 0.0884678 3.59925 0.103212 3.65831 0.132702C3.72084 0.154818 3.77295 0.199052 3.81463 0.265403C3.85632 0.331753 3.88759 0.423907 3.90843 0.541864C3.92927 0.659821 3.9397 0.814639 3.9397 1.00632V2.77567H4.94018V0.187994C4.97839 0.173249 5.03919 0.154818 5.12256 0.132702C5.20593 0.103212 5.28583 0.0884678 5.36226 0.0884678C5.44216 0.0884678 5.51164 0.103212 5.57069 0.132702C5.63322 0.154818 5.68533 0.199052 5.72702 0.265403C5.76871 0.331753 5.79997 0.423907 5.82082 0.541864C5.84166 0.659821 5.85208 0.814639 5.85208 1.00632V6.84518Z"
                                fill={mColor}/>
                            <path
                                d="M7.20104 0.387046C7.2601 0.313323 7.34868 0.243286 7.4668 0.176935C7.58838 0.110584 7.70997 0.0774088 7.83156 0.0774088C8.00525 0.0774088 8.1581 0.132701 8.29011 0.243286C8.42559 0.346498 8.51244 0.512375 8.55066 0.740916C8.61319 1.12428 8.68093 1.5703 8.75388 2.07899C8.82683 2.58768 8.89978 3.1148 8.97273 3.66035C9.04569 4.19853 9.1169 4.73302 9.18638 5.26382C9.25586 5.78726 9.31665 6.25171 9.36876 6.65719C9.32707 6.7604 9.26454 6.8415 9.18117 6.90047C9.0978 6.96682 8.99879 7 8.88415 7C8.80078 7 8.72956 6.98526 8.6705 6.95577C8.61492 6.92628 8.56802 6.88204 8.52981 6.82306C8.49507 6.76409 8.46554 6.68668 8.44123 6.59084C8.42038 6.495 8.40128 6.38441 8.38391 6.25908L8.29011 5.49605H7.34695C7.31916 5.71722 7.29136 5.94576 7.26357 6.18167C7.23578 6.41759 7.20799 6.64613 7.1802 6.8673C7.13156 6.90416 7.07946 6.93365 7.02387 6.95577C6.97176 6.98526 6.9075 7 6.83107 7C6.6539 7 6.52189 6.93734 6.43505 6.81201C6.35167 6.6793 6.30999 6.49868 6.30999 6.27014C6.30999 6.16693 6.31693 6.06372 6.33083 5.96051C6.34472 5.85729 6.36036 5.73565 6.37773 5.59558C6.40204 5.39652 6.43505 5.14955 6.47673 4.85466C6.52189 4.55977 6.57053 4.24276 6.62264 3.90363C6.67475 3.55714 6.73033 3.20327 6.78938 2.84202C6.84844 2.48078 6.90402 2.14165 6.95613 1.82464C7.00824 1.50026 7.05514 1.21274 7.09683 0.962085C7.14199 0.711427 7.17673 0.519747 7.20104 0.387046ZM7.82635 1.81359C7.77771 2.12322 7.72213 2.46972 7.6596 2.85308C7.60054 3.22907 7.5467 3.61243 7.49806 4.00316H8.14421C8.09557 3.60506 8.0452 3.21801 7.99309 2.84202C7.94446 2.45866 7.8993 2.11585 7.85761 1.81359H7.82635Z"
                                fill={mColor}/>
                            <path
                                d="M10.2804 6.92259C10.131 6.92259 10.0129 6.83044 9.92608 6.64613C9.83923 6.46182 9.79581 6.21116 9.79581 5.89416V0.176935C9.83402 0.162191 9.89481 0.14376 9.97819 0.121643C10.0616 0.0921535 10.1415 0.0774088 10.2179 0.0774088C10.2978 0.0774088 10.3673 0.0921535 10.4263 0.121643C10.4889 0.14376 10.541 0.187994 10.5826 0.254344C10.6243 0.320695 10.6556 0.412849 10.6764 0.530805C10.6973 0.648762 10.7077 0.803581 10.7077 0.99526V5.36335H11.901C11.9253 5.44444 11.9479 5.55503 11.9687 5.6951C11.9896 5.8278 12 5.96788 12 6.11532C12 6.41022 11.9705 6.62033 11.9114 6.74566C11.8524 6.86361 11.7742 6.92259 11.6769 6.92259H10.2804Z"
                                fill={mColor}/>
                        </motion.svg>
                    </span>
                </h1>
            </motion.div>
           
                
                <div
                className={classes.Nbbox}
                >
                    <h1>
                        Neophal
                    </h1>
                    <div className={classes.Lines}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <h2>
                    With an aim to reduce food wastage, Neophal&#39;s innovations in cold storage and primary processing technologies has the potential to bring radical changes in the sector. With these innovations, growers would have access to quality storage and high-tech grading and packing solutions at their farmgate. This in turn would help them get better realisation of their produce.


                    </h2>
                </div>
            
            <div
            style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"center"
            }}
            className={classes.bBox}>
                <motion.div 
                style={{
                    translateX:avalue > 1000 && avalue < 1500 ? 0 : "-50vw",
                    transition:"0.3s"
                }}
                className={classes.bimg}>
                    <Image
                    style={{
                        position:'relative',
                        display:"inline"
                     }}
                     src="/ai-apple.png"
                     width={dim.width < 600 ? dim.width/1.2 :dim.width/2.5}
                     height={dim.height/1.9}
                     alt="neophal-app"
                    />
                </motion.div>
                <motion.div
                style={{
                    translateX:avalue > 1000 && avalue < 1500 ? 0 : "50vw",
                    transition:"0.3s"
                }}
                className={classes.bimg}>
                <Image
                    style={{
                        position:'relative',
                        
                     }}
                     src="/ai-apple.png"
                     width={dim.width < 600 ? dim.width/1.2 :dim.width/2.5}
                     height={dim.height/1.9}
                     alt="neophal-app"
                    />
                </motion.div>
                <div className={classes.btxt}>
                &#39;Bringing Horticulture and Ai Together&rsquo;
                </div>
            </div>
            <div className={classes.bBox}>
                <h1
                style={{
                    width:"80vw",
                    position:"relative",
                    top:"-11vh",
                    fontSize:"4vh",
                    
                }}
                >
                    Dynamic Controlled 
                    Atmosphere Storage (DCA)

                </h1>
                <h2 
                style={{
                    width:"80vw",
                    position:"relative",
                    top:"-8vh",
                    fontSize:"2.5vh"
                }}
                >
                Neophal utilises `Artificial Intelligence` to keep an eye on and manage the microclimate inside the storage. In order to provide the ideal environment for produce to survive long and be healthy without losing any of their nutritional content, the conditions of the atmosphere, including temperature, moisture, the level of bacteria, and other critical elements, are carefully monitored alongside the produce.
                </h2>
                <Image
                    style={{
                       position:'relative',
                       top:dim.width < 600 ? "0vh":"3vh"
                    }}
                    src="/ai-apple.png"
                    width={dim.width < 600 ? dim.width/1.2 :dim.width/1.9}
                    height={dim.height/1.9}
                    alt="neophal-app"
                    />
                
                    
            </div>
            <div className={classes.bBox}>
            <h1
                style={{
                    width:"80vw",
                    position:"relative",
                    top:"-26vh",
                    fontSize:"4vh"
                }}
                >
                    Primary Processing Solutions (PPS)
                </h1>
                <h2 
                style={{
                    width:"80vw",
                    position:"relative",
                    top:"-23vh",
                    fontSize:"2.5vh"
                }}
                >
                Neophal uses smart automation technology for sorting produce as per the desired quantity 
                into smaller packets for faster convenience. This method eliminates manual labour which 
                reduce the cost.
                </h2>
            <Image
                style={{
                    position:"relative",
                    top:dim.width < 600 ? "-5vh":"-6vh",
                }}
                    src="/pps-neo.png"
                    width={dim.width < 600 ? dim.width/1.4 :dim.width/2.3}
                    height={500}
                    alt="neophal-pps"
                    />
            </div>
            <div
             style={{
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-between"
            }}
            className={classes.bBox}>
                <div className={classes.bimg2}>
                    <h1>
                    Making <br/>
                    Earth <br/>
                    Greener <br/>
                    and <br/>
                    People <br/>
                    Healther <br/>
                    </h1>
                </div>
                <div className= {classes.bimg3}>
                <Image
                    style={{
                        position:'relative',
                        top:dim.width < 600 ? "0vh":"3vh"
                     }}
                     src="/ai-apple.png"
                     width={dim.width < 600 ? dim.width/1.2 :dim.width/2.5}
                     height={dim.height/1.9}
                     alt="neophal-app"
                    />
                

                </div>
            </div>
            <footer className = {classes.Footer}>
                <div>
                     <h2>Contact <br/>
                     Amit Howladar <br/>
                     </h2>
                     <a href="mailto:amit@neophal.com"> amit@neophal.com </a>
                     <h2>
                     +91 74900 37158
                     </h2>
                </div>
                
            </footer>
        </div>

    );
}

export default Home;