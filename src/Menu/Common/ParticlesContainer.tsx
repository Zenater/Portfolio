import React, {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Engine} from "tsparticles-engine";
import {loadFull} from "tsparticles";
import s from "../../Photo/Photo.module.scss";

export const ParticlesContainer = () => {

    const customInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const options: any = {
        position: 'relative',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        opacity: 0.3,
        fpsLimit: 0,
        interactivity: {
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
            },
        },
    };


    return (
        <div className={s.particles}>
            <
                // @ts-ignore
                Particles
                options={options} init={customInit}/>
        </div>
    )
}

