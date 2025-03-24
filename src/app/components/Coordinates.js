import React, { useEffect } from 'react'

const Coordinates = () => {
    useEffect(() => {
        const hero = document.getElementById('hero')
        let mouseDown = false;

        function startDrag(x, y) {
            mouseDown = true;
            x = x / window.innerWidth * aspect
            y = y / window.innerHeight
            interact(x, y, true);
        }
    
        function drag(x, y) {
            if (mouseDown) {
                x = x / window.innerWidth * aspect
                y = y / window.innerHeight
                interact(x, y, false);
            }
        }
    
        function endDrag() {
            mouseDown = false;
        }
    
        hero.addEventListener('mousedown', event => {
            //startDrag(event.x, event.y);
            let x = event.x / window.innerWidth
            let y = event.y / window.innerHeight
            return [mouseDown = true, x, y]
        });
    
        hero.addEventListener('mouseup', event => {
            //endDrag();
            return mouseDown = false
        });
    
        hero.addEventListener('mousemove', event => {
            //drag(event.x, event.y);
            let x = event.x / window.innerWidth
            let y = event.y / window.innerHeight
            return [x, y]
        });
    
        hero.addEventListener('touchstart', event => {
            startDrag(event.touches[0].clientX, event.touches[0].clientY)
        });
    
        hero.addEventListener('touchend', event => {
            endDrag()
        });
        hero.addEventListener('touchmove', event => {
            event.preventDefault();
            event.stopImmediatePropagation();
            drag(event.touches[0].clientX, event.touches[0].clientY)
        }, { passive: false});
    }, [])
}

export default Coordinates