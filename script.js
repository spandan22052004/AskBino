
function revealSequence(userId, dotsId, botId, delayStart) {
    setTimeout(() => {
        document.getElementById(userId).style.opacity = 1;
        setTimeout(() => {
            document.getElementById(dotsId).style.opacity = 1;
            setTimeout(() => {
                document.getElementById(dotsId).style.opacity = 0;
                document.getElementById(botId).style.opacity = 1;
            }, 1500);
        }, 1000);
    }, delayStart);
}

revealSequence('q1', 'dots1', 'b1', 500);
revealSequence('q2', 'dots2', 'b2', 3500);
revealSequence('q3', 'dots3', 'b3', 6500);