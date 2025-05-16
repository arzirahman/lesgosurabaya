import React from 'react';

interface IRating {
    rating: number;
    maxStars?: number;
    size?: number;
}

const starPath = `M12.5979 1.8541C13.1966 0.0114822 15.8034 0.0114808 16.4021 1.8541L18.429 8.0922C18.6967 8.91625 19.4647 9.47417 20.3311 9.47417H26.8902C28.8277 9.47417 29.6332 11.9534 28.0658 13.0922L22.7594 16.9476C22.0584 17.4568 21.7651 18.3596 22.0328 19.1836L24.0597 25.4217C24.6584 27.2643 22.5494 28.7966 20.982 27.6578L15.6756 23.8024C14.9746 23.2932 14.0254 23.2932 13.3244 23.8024L8.01799 27.6578C6.45056 28.7966 4.3416 27.2644 4.9403 25.4217L6.96718 19.1836C7.23493 18.3596 6.94161 17.4568 6.24064 16.9476L0.934197 13.0922C-0.633231 11.9534 0.172319 9.47417 2.10977 9.47417H8.66889C9.53534 9.47417 10.3033 8.91625 10.571 8.0922L12.5979 1.8541Z`;

const Rating: React.FC<IRating> = ({
    rating,
    maxStars = 5,
    size = 29,
}) => {
    const stars = Array.from({ length: maxStars }, (_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1) * 100;

        return (
            <div
                key={'star.' + i}
                style={{
                    position: 'relative',
                    width: `${size}px`,
                    height: `${size}px`,
                    display: 'inline-block'
                }}
            >
                <svg
                    viewBox="0 0 29 29"
                    fill="#C8C5C5"
                    width="100%"
                    height="100%"
                    style={{ position: 'absolute', top: 0, left: 0 }}
                >
                    <path d={starPath} />
                </svg>

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        clipPath: `inset(0 ${100 - fill}% 0 0)`,
                    }}
                >
                    <svg
                        viewBox="0 0 29 29"
                        fill="#FFD607"
                        width="100%"
                        height="100%"
                    >
                        <path d={starPath} />
                    </svg>
                </div>
            </div>
        );
    });

    return stars;
};

export default Rating;