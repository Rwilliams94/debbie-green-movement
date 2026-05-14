import React, { useState, useRef, useEffect } from 'react';

const getLowResSrc = (src) => {
    if (!src?.includes('res.cloudinary.com')) return null;
    // 800px wide at quality 10 — large enough to fill max-width:350px containers
    // but fast to download (~20-40KB vs 100-500KB for full-res)
    return src.replace('f_auto,q_auto', 'w_800,q_10,f_auto');
};

const LazyImage = ({ src, alt, style, className, onClick, ...props }) => {
    const [isInView, setIsInView] = useState(false);
    const [isHighResLoaded, setIsHighResLoaded] = useState(false);
    const imgRef = useRef();
    const lowResSrc = getLowResSrc(src);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );
        if (imgRef.current) observer.observe(imgRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div ref={imgRef} className={className} style={style} onClick={onClick}>
            {!isInView && (
                <div style={{
                    width: '100%',
                    height: '200px',
                    background: 'linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.5s infinite',
                }} />
            )}
            {isInView && lowResSrc && (
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                    {/* Low-res in normal flow — provides layout dimensions (same max-width as high-res) */}
                    <img
                        src={lowResSrc}
                        alt=""
                        aria-hidden="true"
                        style={{
                            display: 'block',
                            filter: 'blur(8px)',
                            transform: 'scale(1.03)',
                        }}
                    />
                    {/* High-res overlay — fades in when loaded */}
                    <img
                        src={src}
                        alt={alt}
                        onLoad={() => setIsHighResLoaded(true)}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            display: 'block',
                            opacity: isHighResLoaded ? 1 : 0,
                            transition: 'opacity 0.5s ease-in-out',
                        }}
                        {...props}
                    />
                </div>
            )}
            {isInView && !lowResSrc && (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setIsHighResLoaded(true)}
                    style={{
                        opacity: isHighResLoaded ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                    {...props}
                />
            )}
        </div>
    );
};

export default LazyImage;
