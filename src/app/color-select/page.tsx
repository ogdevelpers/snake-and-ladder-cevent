'use client'; // This directive marks the component for client-side rendering

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Changed import for App Router
import Logo from '@/components/ui/Logo/Logo';
import Banner from '@/components/ui/Banner/Banner';
import Button from '@/components/ui/Button/Button';
import Footer from '@/components/ui/Footer/Footer';
const colors = [
    { name: 'Red', hex: '#870303' },
    { name: 'Green', hex: '#23992E' },
    { name: 'Yellow', hex: '#FCDE63' },
    { name: 'Blue', hex: '#16759E' },
];

const ColorSelectPage = () => {
    const router = useRouter();
    const [selectedColor, setSelectedColor] = useState<string | null>(null); // Default to no color selected



    const handleNext = () => {
        if (!selectedColor) {
            alert('Please select a color before proceeding.');
            return;
        }
        localStorage.setItem('selectedPlayerColor', selectedColor);
        router.push('/how-to-play');
    };

    return (
        <div className="screen color-select-screen">
            <section className="home-title">
                <div className="home-logo">
                    <Logo src='/logo_cvent2.png'/>
                </div> 
            </section>
            <div className="color-select-title">
                Select Your Token Colour
            </div>
            <div className="color-grid-outer">
                <div className="color-grid">
                    {colors.map((color) => (
                        <ColorOption
                            key={color.name}
                            color={color.name}
                            isSelected={selectedColor === color.hex}
                            onClick={() => setSelectedColor(color.hex)}
                        />
                    ))}
                </div>
                {
                    selectedColor &&
                    (
                        <div className="color-select-btn">
                            <Button
                                onClick={handleNext} 
                            >
                                Next
                            </Button>
                                                    
                        </div>
                    )
                }
            </div>
            <section className="home-footer">
                <Footer variant="choice" />
            </section>

        </div>
    );
};

const ColorOption = ({ color, isSelected, onClick }: { color: string; isSelected: boolean; onClick: () => void }) => {
    const colorKey = color.toLowerCase();
    return (
        // <div className="color-button-box">
        <button
            onClick={onClick}
            className={`color-button ${isSelected ? 'selected' : ''}`}
        >
            <img src={`/pawns/svg/${colorKey}.svg`} alt={`${color} token`} className="color-token" />
        </button>
        // </div>
    );
}

export default ColorSelectPage;