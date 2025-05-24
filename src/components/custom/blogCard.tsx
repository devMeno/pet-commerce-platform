import React from 'react';

const BlogCard = () => {
    return (
        <div className={'w-full max-w-[380px] p-[8px] flex flex-col gap-[8px] rounded-[12px] bg-white drop-shadow-md'}>
            <img src="/pictures/blog1.svg" alt="" className={'w-full h-[240px] mx-auto object-cover rounded-[12px]'} />
            <span className={'font-bold w-fit text-[10px] py-[2px] px-[10px] bg-[#00A7E7] rounded-full'}>Pet knowledge</span>
            <span className={'font-bold text-[16px]'}>What is a Pomeranian? How to Identify Pomeranian Dogs</span>
            <span>The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.</span>
        </div>
    );
};

export default BlogCard;