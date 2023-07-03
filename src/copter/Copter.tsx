"use client"

// credits go to easwee ( https://codepen.io/easwee/pen/WNYeKy )
import { useEffect } from 'react';
import './copter.css'; // Import the CSS file for sick styling

const RoflCopter = () => {
    useEffect(() => {
        fly();
    }, []);

    const handleClick = (event: React.MouseEvent) => {
        event.currentTarget?.classList?.toggle('crashing');
    };

    return (
        <div className="roflcopter" onClick={handleClick}>
            <pre>{`ROFL:ROFL:LOL:ROFL:ROFL
           ^     
 L    /---------
LOL===       [] \\
 L    \\          \\
        \\_________]
          I    I
        ----------/

        ROFL COPTER !!!
    `}
            </pre>
        </div>

    );
};

export { RoflCopter };

const fly = () => {
    const copterbox = document.querySelector('.roflcopter pre');
    if (!copterbox) {
        throw new Error('Something went wrong with the copter');
    }

    let rofl = copterbox.innerHTML;
    const chMap = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 43, 78],
        [14, 15, 16, 17, 18, 19, 20, 21, 22, 59, 61],
    ];
    const chMapLength = chMap.length;
    let isBlank = true;
    let isBlankCounter = 1;
    const nonBlankTemplate = ['R', 'O', 'F', 'L', ':', 'R', 'O', 'F', 'L', 'L', 'L'];

    function replaceAt(string: string, index: number, character: string) {
        return string.substring(0, index) + character + string.substring(index + character.length);
    };

    setInterval(doRofl, 80);

    function doRofl() {
        for (let i = 0; i < chMapLength; i++) {
            isBlank = !!(2 & isBlankCounter++);
            for (let j = 0; j < chMap[i].length; j++) {
                let chReplace;
                if (!isBlank) {
                    chReplace = ' ';
                } else {
                    chReplace = nonBlankTemplate[j];
                }
                rofl = replaceAt(rofl, chMap[i][j], chReplace);
            }
            copterbox!.innerHTML = rofl;
        }
    }
};
