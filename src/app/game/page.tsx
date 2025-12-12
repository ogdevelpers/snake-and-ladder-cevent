'use client'; // This directive marks the component for client-side rendering
const TIME = 180; // 3 minutes

import { QuestionModal, ResultModal } from '@/components/Modal';
import { DiceRoller } from '@/components/ui/DiceComponent/DiceComponent';
import Footer from '@/components/ui/Footer/Footer';
import Katora from '@/components/ui/Katora/Katora';
import Logo, { LogoGame } from '@/components/ui/Logo/Logo';
import { PlayerToken } from '@/components/ui/PlayerToken/PlayerToken';
import { formatTime, questionCells, otherQuestions, hospitalQuestions, starClimbs } from '@/lib/gameConfig';
import { supabase } from '@/lib/supabaseClient';
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';

const colorResolver = (cellNumber: number): string => {
    const idx = (cellNumber) % 5;
    const isOddRow = Math.floor(cellNumber / 10) % 2 === 1;

    if (idx === 0) return 'white';
    if (idx === 1) return 'plain';
    if (idx === 2) return 'pink';
    if (isOddRow) {
        if (idx === 3) return 'teal';
        if (idx === 4) return 'purple';
    }
    if (idx === 3) return 'purple';
    return 'teal';
};

const GamePage = () => {
    const [playerPosition, setPlayerPosition] = useState(1);
    const [diceValue, setDiceValue] = useState(0);
    const [showDiceRollButton, setShowDiceRollButton] = useState(true);
    const [showQuestionModal, setShowQuestionModal] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState<{ question: string; options: string[]; correctAnswer: string, number: number, start: number } | null>(null);
    const [showResultModal, setShowResultModal] = useState(false);
    const [resultModalMessage, setResultModalMessage] = useState({ message: '', type: 'success' });
    const [timer, setTimer] = useState(TIME); // 3 minutes in seconds
    const [gameStarted, setGameStarted] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [modalConfirmAction, setModalConfirmAction] = useState<(() => void) | null>(null);
    const [selectedColor, setSelectedColor] = useState('#EF4444'); // Default color
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
    const [questions, setQuestions] = useState(hospitalQuestions);
    const boardRef = useRef<HTMLDivElement>(null);
    const cellRefs = useRef<Record<number, HTMLDivElement | null>>({});


    // Use useRef to store the timer interval ID
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Load selected color from localStorage and start the game on mount
    useEffect(() => {
        const storedColor = localStorage.getItem('selectedPlayerColor');
        const storedProfile = localStorage.getItem('snakesAndLaddersGameProfile');
        if (storedColor) {
            setSelectedColor(storedColor);
        }
        if (storedProfile) {
            setSelectedProfile(storedProfile);
            if (storedProfile !== 'Hospitality Professional') {
                setQuestions(otherQuestions);
            }
        }
        setGameStarted(true);
    }, []);

    const handleGameLoss = useCallback(async () => {
        setGameStarted(false);
        const timeTaken = TIME;
        try {
            const { data, error } = await supabase.from('game_winners').select('*').eq('playerid', localStorage.getItem('snakesAndLaddersGameId'))
            if (error) {
                console.error('❌ Supabase select error (loss):', error.message);
            }

            const player = data?.[0]; 

            await supabase.from('game_winners')
                .update({
                    profiletype: localStorage.getItem('snakesAndLaddersGameProfile'),
                    hasWon: player?.hasWon || false,
                    time_taken: Math.min(timeTaken, player ? player.time_taken : TIME),
                    attempts: data ? player.attempts + 1 : 1
                })
                .eq('playerid', localStorage.getItem('snakesAndLaddersGameId'));

            if (error) {
                console.error('❌ Supabase update error (loss):', error.message);
            } else {
                console.log('✅ Game loss updated successfully');
            }
        } catch (err) {
            console.error('🔥 Unexpected error (loss):', err);
        }
    }, []);


    const handleLoss = async () => await handleGameLoss();

    // Optimized Game Timer Effect - only runs when gameStarted changes
    useEffect(() => {
        if (gameStarted) {
            // Clear any existing timer
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }

            // Start new timer
            timerRef.current = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        // Time's up
                        setGameStarted(false);
                        setResultModalMessage({ message: "Time's up! Better luck next time!", type: "over" });
                        setShowResultModal(true);
                        setShowDiceRollButton(false);
                        handleLoss();
                        setModalConfirmAction(() => () => {
                            setShowResultModal(false);
                            resetGame();
                        });
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            // Clear timer when game stops
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        }

        // Cleanup on unmount
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [gameStarted]); // Only depends on gameStarted


    const resetGame = useCallback(() => {
        setPlayerPosition(1);
        setDiceValue(0);
        setTimer(180);
        setGameStarted(false);
        setShowDiceRollButton(true);
        localStorage.removeItem('selectedPlayerColor');
        // Use standard browser navigation instead of Next.js router
        window.location.href = '/';
    }, []);

    const boardCells = useMemo(() => {
        const reorderedBoard = [];
        for (let r = 9; r >= 0; r--) {
            const row = [];
            for (let c = 0; c < 10; c++) row.push(r * 10 + c + 1);
            if (r % 2 !== 0) row.reverse();
            reorderedBoard.push(...row);
        }
        return reorderedBoard.map((num) => {
            const isQuestionCell = questionCells.includes(num);
            const starInfo = starClimbs.find(sl => sl.start === num);
            return (
                <div
                    key={num}
                    ref={(el) => { cellRefs.current[num] = el; }}
                    className={`board-cell board-cell-${colorResolver(num)} ${isQuestionCell ? 'board-cell-question' : ''}`}
                >
                    {/* The content of the cell (number or star) */}
                    {!starInfo && num}
                    {starInfo && <span className="game-icon-star" role="img" aria-label="star">⭐</span>}
                </div>
            );
        });
    }, []);


    const handleGameWin = useCallback(async () => {
        setGameStarted(false);
        const timeTaken = TIME - timer;
        const minutes = Math.floor(timeTaken / 60);
        const seconds = timeTaken % 60;
        setResultModalMessage({ message: `Congratulations! You reached 100 in ${minutes}m ${seconds}s!`, type: 'congrats' });
        setShowResultModal(true);
        setShowConfetti(true);
        setShowDiceRollButton(false);

        try {
            const { data , error } = await supabase.from('game_winners').select('*').eq('playerid', localStorage.getItem('snakesAndLaddersGameId'));
            const player = data ? data[0] : null;

            console.log({player})


             await supabase.from('game_winners')
                .update({
                    profiletype: localStorage.getItem('snakesAndLaddersGameProfile'),
                    hasWon: true,
                    time_taken: Math.min(timeTaken, player.time_taken || TIME),
                    attempts: player ? player.attempts + 1 : 1
                })
                .eq('playerid', localStorage.getItem('snakesAndLaddersGameId'));

            if (error) {
                console.error('❌ Supabase update error (win):', error.message);
            } else {
                console.log('✅ Winner updated successfully');
            }
        } catch (err) {
            console.error('🔥 Unexpected error (win):', err);
        }

        setModalConfirmAction(() => () => {
            setShowResultModal(false);
            setShowConfetti(false);
            resetGame();
        });
    }, [timer, resetGame]);


    // Handles the dice roll and player movement
    const rollDice = useCallback((diceNumber: number) => {
        if (!gameStarted || !showDiceRollButton) return;
        const roll = diceNumber;
        setDiceValue(roll);
        setShowDiceRollButton(false);

        let newPosition = playerPosition + roll;
        if (newPosition > 100) {
            newPosition = playerPosition; // If overshoot, stay in place
        }

        setTimeout(() => {
            setPlayerPosition(newPosition);
            if (questionCells.includes(newPosition)) {
                const idx = questionCells.indexOf(newPosition);
                const fallBackQuestion = questions.find(q => q.number === (idx + 1));
                const questionIndex = questions.find(q => q.start === newPosition);
                setCurrentQuestion(questionIndex || fallBackQuestion || questions[Math.floor(Math.random() * questions.length)]);
                setTimeout(() => {
                    setShowQuestionModal(true);
                }, 1400);
            } else if (newPosition === 100) {
                handleGameWin();
            } else {
                setTimeout(() => {
                }, 1000); // Match the CSS animation duration
                setShowDiceRollButton(true);
            }
        }, 1800);

    }, [gameStarted, showDiceRollButton, playerPosition, handleGameWin]);


    // Handles the outcome of answering a question
    const handleAnswer = useCallback((selectedOption: string) => {
        setShowDiceRollButton(false);
        setShowQuestionModal(false);
        const isCorrect = selectedOption === currentQuestion?.correctAnswer;
        let finalPosition = playerPosition;

        if (isCorrect) {
            const starMove = starClimbs.find(s => s.start === playerPosition);
            if (starMove) {
                finalPosition = starMove.end;
                setResultModalMessage({ message: `Right answer! Climb up to ${starMove?.end}!`, type: 'success' });
                setTimeout(() => setPlayerPosition(finalPosition), 1250); // Animate the climb
            }
        } else {
            const starMove = starClimbs.find(s => s.start === playerPosition);
            if (starMove && starMove.drop) {
                finalPosition = starMove.drop;
                setResultModalMessage({ message: `Oops! Wrong answer. Down you go to ${finalPosition}!`, type: 'drop' });
                setTimeout(() => setPlayerPosition(finalPosition), 1250); // Animate the climb
            }
        }

        setShowResultModal(true);
        setModalConfirmAction(() => () => {
            setShowResultModal(false);
            if (finalPosition === 100) {
                handleGameWin();
            } else {
                setTimeout(() => setShowDiceRollButton(true), 1600);
            }
        });
    }, [currentQuestion, playerPosition, handleGameWin]);

    // Memoized formatted time to avoid recalculation
    const formattedTime = useMemo(() => formatTime(timer), [timer]);

    return (
        <div className="game-screen-main">
            <div className="game-header">
                <div className="game-home-logo">
                    <LogoGame src={"/game_logo.png"} />
                </div>
            </div>

            <section className="game-enclose-section">
                <div className="board-grid" ref={boardRef}>
                    {boardCells}
                    {/* The single, persistent token is rendered here, over the board */}
                    <PlayerToken
                        position={playerPosition}
                        boardRef={boardRef}
                        cellRefs={cellRefs}
                        color={selectedColor}
                    />
                </div>

                <section className="game-controls">
                    <div className="dice-reveal">
                        <Katora color={selectedColor} />
                    </div>
                    <div className="timer-display">
                        <span className="timer-label">Time:</span>
                        <span className="timer-value">{formattedTime}</span>
                    </div>
                    <div className="dice-roller-box">
                        <DiceRoller
                            onRoll={rollDice} // Pass your rollDice function
                            disabled={!showDiceRollButton || !gameStarted} // Pass your disabled logic
                        />
                    </div>
                </section>
            </section>

            <section className="home-footer">
                <Footer variant="game" />
            </section>


            {showQuestionModal && currentQuestion && (
                <QuestionModal
                    question={currentQuestion.question}
                    options={currentQuestion.options}
                    onAnswer={handleAnswer}
                />
            )}

            {showResultModal && modalConfirmAction && (
                <ResultModal
                    message={resultModalMessage?.message}
                    onConfirm={modalConfirmAction}
                    title={resultModalMessage?.type}
                />
            )}

        </div>
    );
};

export default GamePage;