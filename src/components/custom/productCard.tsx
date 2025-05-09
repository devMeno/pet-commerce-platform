import React from 'react';

const ProductCard = () => {
    return (
        <div className={'w-[280px] p-[8px] flex flex-col gap-[8px] rounded-[12px] bg-white'}>
            <img src="/pictures/imageProduct.svg" alt="" className={'size-[264px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold text-[16px]'}>MO231 - Pomeranian White</span>
            <div className={'flex gap-2'}>
                <span>Product : <span className={'font-semibold'}>Food</span></span><span>Size : <span className={'font-semibold'}>385 mg</span></span>
            </div>
            <span className={'font-bold'}>6.900.000 VND</span>
            <div className={'bg-sec-min rounded-[10px] w-full py-[6px] px-[4px] flex justify-center gap-[8px]'}>
                <img src="/logos/Gift.svg" alt=""/>
                <span className={'font-bold'}> Free Toy & Free Shaker</span>
            </div>
        </div>
    );
};

export default ProductCard;