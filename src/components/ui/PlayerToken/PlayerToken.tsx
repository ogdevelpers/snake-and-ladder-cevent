import React, { useState, useEffect, useMemo, useRef } from 'react';

type PlayerTokenProps = {
    position: number;
    boardRef: React.RefObject<HTMLDivElement | null>;
    cellRefs: React.RefObject<Record<number, HTMLDivElement | null>>;
    color: string;
};

export const PlayerToken: React.FC<PlayerTokenProps> = ({ position, boardRef, cellRefs, color }) => {
    const [style, setStyle] = useState<React.CSSProperties>({ opacity: 0 });
    const isInitialMount = useRef(true);

    useEffect(() => {
        const boardNode = boardRef.current;
        const cellNode = cellRefs.current?.[position];

        // Exit if the board or target cell aren't rendered yet
        if (!boardNode || !cellNode) return;

        const boardRect = boardNode.getBoundingClientRect();
        const cellRect = cellNode.getBoundingClientRect();

        // Calculate the token's top/left relative to the board container
        const top = cellRect.top - boardRect.top;
        const left = cellRect.left - boardRect.left;

        // On the very first render, we don't want an animation.
        // We just want to appear instantly at the starting position.
        if (isInitialMount.current) {
            setStyle({
                opacity: 1,
                transform: `translate(${left}px, ${top}px)`,
                transition: 'none', // No transition on first load
            });
            isInitialMount.current = false;
        } else {
            // For all subsequent moves, apply the transform with the CSS transition
            setStyle({
                opacity: 1,
                transform: `translate(${left}px, ${top}px)`,
            });
        }

    }, [position]); // This effect runs every time the player's position changes

    return (
        <div className="player-token" style={{ ...style, backgroundColor: color }}>
            <span className="player-initial">P</span>
        </div>
    );
};