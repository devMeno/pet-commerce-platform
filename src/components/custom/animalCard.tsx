import React from 'react';

const AnimalCard = () => {
    return (
        <div className={'w-full max-w-[185px] md:max-w-[280px] p-[8px] flex flex-col gap-[8px] rounded-[12px] bg-white drop-shadow-md'}>
            <img src="/pictures/imageAnimal.svg" alt="" className={'size-[169px] md:size-[264px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold text-[14px] md:text-[16px] text-[#00171F]'}>MO231 - Pomeranian White</span>
            <div className={'flex gap-2 text-[12px]'}>
                <span className={'text-[#667479]'}>Genre : <span className={'font-semibold'}>Male</span></span><span className={'text-[#667479]'}>Age : <span className={'font-bold text-[#667479]'}>02 months</span></span>
            </div>
            <span className={'font-bold text-[14px] text-[#00171F]'}>6.900.000 VND</span>
        </div>
    );
};

export default AnimalCard;