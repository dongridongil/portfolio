import { motion, useAnimation, useMotionValueEvent, useScroll } from 'framer-motion';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Nav = styled(motion.nav)`
    position: fixed;
    height: 80px;
    top: 0;
    width: 100%;
    z-index: 1000;

    ul {
        list-style-type: none;
        padding: 0;
        display: flex;
        justify-content: center;
    }
`;

const Tab = styled.div`
    color: white;
    font-size: 20px;
    margin: 0 10px;
    left: -510px;
    position: relative;
    padding: 30px;
    cursor: pointer;
    &:hover {
        color: #e31b6d;
    }
`;

const navVar = {
    top: {
        backgroundColor: 'rgba(0,0,0,0)',
        transition: { duration: 1 },
    },

    scroll: {
        backgroundColor: '#2f2e2e',
        transition: { duration: 2.5 },
    },
};
const Header = () => {
    const { scrollY } = useScroll();
    const navAnimation = useAnimation();

    useMotionValueEvent(scrollY, 'change', (latest) => {
        if (scrollY.get() > 50) {
            navAnimation.start('scroll');
        } else {
            navAnimation.start('top');
        }
    });

    return (
        <Nav variants={navVar} animate={navAnimation} initial={'top'}>
            <ul>
                <Tab>
                    <a href="#home">HOME</a>
                </Tab>
                <Tab>
                    <a href="#about">ABOUT</a>
                </Tab>

                <Tab>
                    <a href="#project">PROJECT</a>
                </Tab>
                <Tab>
                    <a href="#skill">SKILL</a>
                </Tab>
            </ul>
        </Nav>
    );
};

export default Header;
