import { Footer } from "../footer";
import { Navbar } from "../navbar";
import { useEffect } from 'react';
import './style.css';

export function LayoutContainer({ children }) {
    useEffect(() => {
        const setHeaderOffset = () => {
            const header = document.querySelector('header');
            const height = header ? header.getBoundingClientRect().height : 0;
            document.documentElement.style.setProperty('--header-offset', `${height}px`);
            document.documentElement.style.setProperty('scroll-padding-top', `${height + 8}px`);
        }

        setHeaderOffset();
        window.addEventListener('resize', setHeaderOffset);
        return () => window.removeEventListener('resize', setHeaderOffset);
    }, []);

    return (
        <>
            <Navbar />
            <main className="app-continer">
                {children}
            </main>
            <Footer />
        </>
    )
}