import React from 'react'

interface iPercentageCircle {
    vote:number
}

export const PercentageCircle = ( { vote }:iPercentageCircle ) => {

    const finalVote = Math.floor(vote * 10);

    const colorPercentage = () => {
        if (finalVote > 60) return 'green'
        else if (finalVote > 40 ) return 'orange'

        return 'red'
             
    }

    return (
            <svg viewBox="0 0 36 36" className={`circular-chart ${colorPercentage()}`}>
                <path className="circle-bg"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path className="circle"
                    stroke-dasharray={`${finalVote}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.35" className="percentage">{`${finalVote}`}%</text>
            </svg>

    )
}
