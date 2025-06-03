'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ImageOptimizeProps extends Omit<ImageProps, 'src'> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
    lazyLoad?: boolean;
}

const ImageOptimize: React.FC<ImageOptimizeProps> = ({
    src,
    alt = '',
    fallbackSrc = '/fallback.jpg',
    className = '',
    lazyLoad = true,
    ...props
}) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
            loading={lazyLoad ? 'lazy' : 'eager'}
            className={className}
            {...props}
        />
    );
};

export default ImageOptimize;
