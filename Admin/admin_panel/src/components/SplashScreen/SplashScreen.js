import React, { Component } from 'react';
import "./SplashScreen.scss";
import { motion } from "framer-motion";



class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<>
            <motion.div className="SplashScreen__div--container" animate={{opacity: 0.2 }}
                transition={{
                    yoyo: Infinity,
                    duration: 0.8,
                    ease: "easeInOut"
                }}>
                <h1 className="SplashScreen__h1--text">SplashScreen</h1>
            </motion.div>
        </>);
    }
}

export default SplashScreen;