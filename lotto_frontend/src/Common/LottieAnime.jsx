import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../src/assets/loading.json';

const LottieAnime = () => {
    const defaultOptions = {
		loop: true,
		autoplay: true, 
		animationData: animationData,
		rendererSettings: {
		  preserveAspectRatio: 'xMidYMid slice'
		}
	};

    return (
        <>
            <div className="lottieAnime">
                <Lottie 
                    options={defaultOptions}
                    width={200}
                    height={200}
                />
            </div>
        </>
    );
};

export default LottieAnime;