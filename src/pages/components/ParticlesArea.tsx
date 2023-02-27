import { useCallback, useState, useEffect } from "react";
import { useTheme } from '../../lib/theme'
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

export default function ParticlesArea() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const { theme, toggleTheme } = useTheme();
    const [particlesContainer, setParticlesContainer] = useState<Container>();

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        setParticlesContainer(container);
        await console.log(container);
    }, []);

    useEffect(() => {
        if (particlesContainer) {
            if (theme === "light") {
                particlesContainer.options.particles.color.value = "#0D1117"
            } else {
                particlesContainer.options.particles.color.value = "#EDF2F7"
            }
            particlesContainer.refresh();
        }
    }, [theme, particlesContainer]);

    return (
        <div className="d-block">
            <Particles
                id="tsparticles"
                url="/js/particles-js.config.json"
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </div>
    );
}