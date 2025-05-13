import React from 'react';

const ProductCard = () => {
    return (
        <div className={'w-full max-w-[185px] md:max-w-[280px] p-[8px] flex flex-col gap-[8px] rounded-[12px] bg-white drop-shadow-md'}>
            <img src="/pictures/imageProduct.svg" alt="" className={'size-[169px] md:size-[264px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold text-[14px] md:text-[16px]'}>MO231 - Pomeranian White</span>
            <div className={'flex gap-2 text-[12px] md:text-[14px]'}>
                <span>Product : <span className={'font-semibold'}>Food</span></span><span>Size : <span className={'font-semibold'}>385 mg</span></span>
            </div>
            <span className={'font-bold text-[16px]'}>6.900.000 VND</span>
            <div className={'bg-sec-min rounded-[10px] w-full py-[6px] px-[4px] flex justify-center gap-[2px] md:gap-[8px]'}>
                <img src="/logos/Gift.svg" alt="" className={'size-[20px]'}/>
                <span className={'font-bold text-[12px] md:text-[14px]'}> Free Toy & Free Shaker</span>
            </div>
        </div>
    );
};

export default ProductCard;