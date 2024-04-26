'use client';
import React from 'react';
import { useQuery } from '@tanstack/react-query'; // react-query에서 useQuery 가져오기
import './loader.css'; // CSS 파일 임포트

const Loader = () => {
  // useQuery 훅을 사용하여 전역 isLoading 상태 관리
  const data = useQuery({
    queryKey: ["isLoading"],
    initialData: true,
  })
  console.log(data)
  const isLoading = true;
  return (
    isLoading ?
    <div className="loader-container">
      <div className='loader-wrapper'>
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="220.000000pt" height="214.000000pt" viewBox="0 0 220.000000 214.000000"
            preserveAspectRatio="xMidYMid meet" className="loader">
            <g transform="translate(0.000000,214.000000) scale(0.100000,-0.100000)"
                fill="#000000" stroke="none">
                <path d="M703 1881 c-92 -24 -145 -77 -170 -173 -16 -64 -16 -101 -2 -170 38 -178 162 -293 299 -274 218 30 285 386 105 562 -50 50 -156 74 -232 55z" className="loader-path"/>
                <path d="M1333 1881 c-71 -18 -137 -88 -180 -192 -22 -52 -27 -80 -27 -149 -1 -75 2 -92 29 -145 39 -79 94 -121 170 -130 102 -13 187 24 252 109 109 142 93 403 -30 484 -33 22 -53 27 -111 29 -39 1 -86 -2 -103 -6z" className="loader-path"/>
                <path d="M1843 1460 c-63 -13 -109 -38 -167 -90 -73 -68 -99 -125 -104 -230 -4 -78 -2 -89 25 -140 36 -68 95 -115 167 -131 48 -10 61 -9 122 9 128 40 228 144 261 275 17 64 17 70 0 134 -19 74 -63 130 -121 157 -41 18 -131 26 -183 16z" className="loader-path"/>
                <path d="M129 1437 c-82 -50 -114 -120 -107 -228 7 -87 42 -162 107 -222 69 -65 123 -89 208 -95 61 -4 79 -1 115 18 102 52 138 113 138 232 0 106 -26 166 -97 226 -83 69 -143 92 -243 92 -71 0 -91 -4 -121 -23z" className="loader-path"/>
                <path d="M980 1146 c-82 -13 -160 -49 -230 -105 -59 -48 -74 -64 -116 -139 -111 -194 -61 -527 89 -587 52 -21 102 -14 205 28 113 46 195 44 318 -6 108 -44 152 -46 209 -12 49 28 83 71 113 142 18 43 22 71 22 168 0 127 -20 207 -75 296 -68 111 -209 199 -348 218 -90 13 -88 13 -187 -3z" className="loader-path"/>
            </g>
          </svg>
          <p className='text'>잠시만 기다려주세요...!</p>
      </div>
    </div>
      
    : null
  );
};

export default Loader;
