import React from 'react';

const AnimalCard = () => {
    return (
        <div className={'w-[280px] h-[378px] p-[8px] flex flex-col gap-[8px] rounded-[12px] shadow-lg'}>
            <img src="/pictures/imageAnimal.svg" alt="" className={'size-[264px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold text-[16px]'}>MO231 - Pomeranian White</span>
            <div className={'flex gap-2'}>
                <span>Genre : <span className={'font-semibold'}>Male</span></span><span>Age : <span className={'font-semibold'}>02 months</span></span>
            </div>
            <span className={'font-bold'}>6.900.000 VND</span>
        </div>
    );
};

export default AnimalCard;