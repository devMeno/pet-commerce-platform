import React from 'react';

const AnimalCard = () => {
    return (
        <div className={'w-1/2 max-w-[185px] md:max-w-[280px] p-[8px] flex flex-col gap-[8px] rounded-[12px] shadow-lg'}>
            <img src="/pictures/imageAnimal.svg" alt="" className={'size-[169px] md:size-[264px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold text-[14px] md:text-[16px]'}>MO231 - Pomeranian White</span>
            <div className={'flex gap-2 text-[12px] md:text-[14px]'}>
                <span>Genre : <span className={'font-semibold'}>Male</span></span><span>Age : <span className={'font-semibold'}>02 months</span></span>
            </div>
            <span className={'font-bold text-[16px]'}>6.900.000 VND</span>
        </div>
    );
};

export default AnimalCard;