'use client';

import Image, { ImageProps } from 'next/image';
import React from 'react';

interface ImageOptimizeProps extends Omit<ImageProps, 'src'> {
    src: string;
    alt: string;
    priority?: boolean;
    fallbackSrc?: string;
    className?: string;
    lazyLoad?: boolean;
}

const ImageOptimize: React.FC<ImageOptimizeProps> = ({
    src,
    alt = '',
    priority = false,
    fallbackSrc = '/fallback.jpg',
    className = '',
    lazyLoad = true,
    ...props
}) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    return (
        <Image
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
            priority={priority}
            loading={lazyLoad ? 'lazy' : 'eager'}
            className={className}
            {...props}
        />
    );
};

export default ImageOptimize;
