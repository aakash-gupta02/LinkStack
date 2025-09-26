import React from 'react'

const Background = () => {
    // Responsive positions and sizes for orbs
    const orbs = [
        { width: '25vw', height: '25vw', left: '5vw', top: '7vh' },
        { width: '25vw', height: '25vw', left: '50vw', top: '60vh' },
        { width: '20vw', height: '20vw', left: '70vw', top: '5vh' },
    ];

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                {/* Grid Mesh */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

                {/* Floating Orbs */}
                {orbs.map((orb, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full bg-indigo-500 blur-3xl opacity-40"
                        style={{
                            width: orb.width,
                            height: orb.height,
                            left: orb.left,
                            top: orb.top,
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default Background