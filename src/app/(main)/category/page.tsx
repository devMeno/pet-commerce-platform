import React from 'react';
import {Button} from "@/components/ui/button";
import AnimalCard from "@/components/custom/animalCard";
import UserLayout from "@/components/custom/userLayout";

const Page = () => {
    return (
        <>
            <UserLayout>
                <div className={'relative pt-[100px] pb-[40px]'}>
                    <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-col gap-[20px] mx-auto'}>
                        <section>
                            <div className={'relative flex flex-col md:flex-row rounded-[40px] overflow-hidden'}>
                                <div className={'bg-sec-min w-full h-[378px] rounded-[40px]'}></div>
                                <div className={'hidden md:block absolute top-0 -right-[160px] mx-auto bg-main rounded-[99px] size-[800px] rotate-160'}></div>
                                <div className={'block md:hidden absolute top-[210px] -right-10 rotate-3 mx-auto bg-main w-[1000px] h-full'}></div>
                            </div>
                            <div className={'flex'}>
                                <div>
                                    <span className={'text-[46px] font-bold'}>One more friends</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default Page;