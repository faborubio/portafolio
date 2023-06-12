import './index.scss'
import LogoS from '../../../assets/images/logofdef.png'
import { useEffect, useRef } from 'react'

import { DrawSVGPlugin } from "gsap-trial/dist/DrawSVGPlugin";
import gsap from 'gsap-trial'

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    const didAnimate = useRef(false);

    useEffect(() => {
        if (didAnimate.current) {
            return;
          }
        didAnimate.current = true;
        gsap.registerPlugin(DrawSVGPlugin)

        gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outlineLogoRef.current, {
            drawSVG: 0,
            duration: 20,
          })

        gsap.fromTo(
        solidLogoRef.current,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            delay: 4,
            duration: 4,
        }
        )
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo ' src={LogoS} alt="S"/>
            <svg
                width="333pt"
                height="493pt"
                version="1.0"
                viewBox="0 0 333 493"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g
                className="svg-container"
                transform="translate(0 493) scale(.1 -.1)"
                fill="none"
                >
                <path
                    ref={outlineLogoRef}
                    d="M1265 4362 c-38 -8 -72 -18 -75 -22 -3 -3 -25 -18 -50 -32 -58 -34
                    -100 -78 -144 -152 -46 -77 -46 -92 0 -33 45 58 128 114 208 140 48 15 99 21
                    234 25 l172 5 0 43 0 44 -137 -1 c-86 -1 -165 -7 -208 -17z
                    M2596 4251 c-3 -5 15 -21 41 -36 115 -66 167 -152 168 -275 0 -62 -5
                    -85 -28 -131 -48 -98 -145 -170 -274 -203 -48 -13 -119 -16 -340 -16 -154 0
                    -283 -3 -286 -7 -8 -7 250 -74 296 -76 15 -1 27 -6 27 -11 0 -14 253 2 324 20
                    157 40 272 127 333 252 36 71 38 82 38 166 0 79 -3 97 -25 136 -17 30 -33 46
                    -49 48 -25 4 -64 35 -121 94 -34 36 -93 58 -104 39z
                    M725 3075 c5 -274 11 -392 19 -397 9 -6 74 -1 84 7 1 1 -2 114 -8
                    251 -5 137 -10 310 -10 385 l0 137 -46 4 -47 3 8 -390z
                    M1695 3458 c-84 -22 -145 -92 -145 -166 0 -93 64 -164 185 -206 51
                    -18 289 -31 348 -19 24 5 27 9 27 48 l0 43 -172 4 c-156 3 -177 5 -215 25
                    -118 63 -117 190 2 264 33 21 29 22 -30 7z
                    M710 2628 c-68 -12 -159 -61 -213 -115 -84 -84 -135 -225 -107 -294
                    10 -24 11 -32 1 -38 -9 -6 -12 -62 -9 -232 3 -206 5 -229 27 -282 32 -81 115
                    -168 200 -210 62 -30 73 -32 171 -32 93 0 112 4 163 27 80 38 161 117 200 197
                    l32 66 3 233 c3 196 1 232 -11 232 -10 0 -13 8 -9 25 2 14 9 25 15 25 16 0 -1
                    104 -28 165 -62 140 -257 264 -357 226 -20 -7 -28 -7 -30 2 -2 9 -15 11 -48 5z
                    M1785 2589 c-164 -13 -233 -51 -272 -149 -16 -41 -18 -103 -21 -767
                    l-3 -723 -24 0 -25 0 0 -131 c0 -74 4 -128 9 -125 5 3 37 -17 72 -44 35 -27
                    74 -50 87 -50 22 0 22 0 22 175 l0 175 -25 0 -25 0 0 653 c0 671 5 765 40 822
                    19 30 66 57 121 69 14 3 182 6 372 6 334 1 347 2 347 20 0 10 13 32 30 47 l30
                    28 -323 1 c-177 0 -362 -3 -412 -7z"
                />
                </g>
            </svg>
        </div>
    )
}


export default Logo ;