import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import styled from "styled-components";

const Figure = styled.figure`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  perspective: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
    perspective: none;
  }
`;

const MobileAlert = styled.div`
  position: absolute;
  top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  display: none;
  
  @media (max-width: 640px) {
    display: block;
  }
`;

const Inner = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Img = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  will-change: transform;
  transform: translateZ(0);
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  @media (max-width: 640px) {
    height: 70%;
    width: 70%;

  }
`;

const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  will-change: transform;
  transform: translateZ(30px);
`;

const Caption = styled(motion.figcaption)`
  pointer-events: none;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 4px;
  background-color: #fff;
  padding: 4px 10px;
  font-size: 10px;
  color: #2d2d2d;
  opacity: 0;
  z-index: 3;

  @media (max-width: 640px) {
    display: none;
  }
`;

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue();
  const y = useMotionValue();
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <Figure
      ref={ref}
      width={containerWidth}
      height={containerHeight}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && <MobileAlert>This effect is not optimized for mobile. Check on desktop.</MobileAlert>}
      <Inner width={imageWidth} height={imageHeight} style={{ rotateX, rotateY, scale }}>
        <Img src={imageSrc} alt={altText} width={imageWidth} height={imageHeight} />
        {displayOverlayContent && overlayContent && <Overlay>{overlayContent}</Overlay>}
      </Inner>
      {showTooltip && <Caption style={{ x, y, opacity, rotate: rotateFigcaption }}>{captionText}</Caption>}
    </Figure>
  );
}
