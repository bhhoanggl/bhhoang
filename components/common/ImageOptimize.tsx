'use client';

import Image, { ImageProps } from 'next/image';
import React, { CSSProperties } from 'react';

interface ImageOptimizeProps extends Omit<ImageProps, 'src'> {
    src: string;
    alt: string;
    fallbackSrc?: string;
    className?: string;
    lazyLoad?: boolean;
    fill?: boolean;
    priority?: boolean;
}

const ImageOptimize: React.FC<ImageOptimizeProps> = ({
    src,
    alt = '',
    fallbackSrc = '/fallback.jpg',
    className = '',
    lazyLoad = true,
    fill,
    priority,
    ...props
}) => {
    const [imgSrc, setImgSrc] = React.useState(src);

    const imgStyle: CSSProperties = fill ? {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
    } : {};

    const imgProps = {
        ...props,
        style: imgStyle
    };

    if (fill) {
        delete imgProps.width;
        delete imgProps.height;
    }

    return (
        <img
            src={imgSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
            loading={priority ? 'eager' : (lazyLoad ? 'lazy' : 'eager')}
            className={className}
            {...imgProps}
        />
    );
};

export default ImageOptimize;
