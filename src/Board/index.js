import {useState} from 'react';
import Circles from './Circles.js';
import Controls from './Controls.js';
import {COLORS} from '../constants.js'

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * COLORS.length);
    return COLORS[randomIndex];
}

const Board = () => {
    const [circles, setCircles] = useState([]);
    const [history, setHistory] = useState([])

    const handleClick = (e) => {
        console.log(e.clientX, e.clientY)
        setCircles(prev => {
            return [
                ...prev,
                {
                    x: e.clientX,
                    y: e.clientY,
                    id: +new Date(),
                    bgColor: getRandomColor(),

                }
            ]
        })
    }

    const handleUndo = () => {
        const copy = [...circles];
        const lastCircle = copy.pop();

        setHistory(prev => [...prev, lastCircle]);
        setCircles(copy);
    }

    const handleRedo = () => {
        if (!history.length)
            return;
        const copyHistory = [...history];
        const lastCircleHistory = copyHistory.pop();

        setCircles(prev => [...prev, lastCircleHistory]);
        setHistory(copyHistory);
    }

    const handleReset = () => {
        setCircles([])
        setHistory([])
    }

    return (
        <div className={"board"}
             onClick={handleClick}
        >
            <Controls
                hasCircles={circles.length > 0}
                hasHistory={history.length > 0}
                onReset={handleReset} onUndo={handleUndo} onRedo={handleRedo}/>
            <Circles circles={circles}/>
        </div>
    )
}

export default Board
