import React from 'react';
import {Button} from "@/components/ui/button";
import AnimalCard from "@/components/custom/animalCard";
import UserLayout from "@/components/custom/userLayout";
import { Checkbox } from "@/components/ui/checkbox"
import {Input} from "@/components/ui/input";

const Page = () => {
    return (
        <>
            <UserLayout>
                <div className={'relative pt-[100px]'}>
                    <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-col gap-[20px] mx-auto my-[40px]'}>

                        <section>
                            <div className={'hidden md:block'}>
                                <div className={'relative w-full h-[378px] flex flex-row bg-main rounded-[20px] overflow-hidden'}>
                                    <div className={'absolute -top-[420px] -right-[200px] rotate-26 size-[787px] bg-sec rounded-[99px]'}></div>
                                    <div className={'flex flex-row px-[30px] lg:px-[75px] z-40'}>
                                        <div className={'flex items-end'}>
                                            <img src="/pictures/petgroup.svg" alt=""/>
                                        </div>
                                        <div className={'h-full lg:w-3/5 flex items-center'}>
                                            <div className={'flex flex-col text-right h-fit'}>
                                                <span className={'font-bold text-[#002A48] text-[52px]/[68px]'}>One more friend</span>
                                                <span className={'font-bold text-[#002A48] text-[36px]/[60px]'}>Thousands more fun!</span>
                                                <div className={'flex justify-end w-full'}>
                                                    <span className={'font-medium text-[12px] my-[15px] w-full lg:w-2/3'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                                                </div>
                                                <div className={'flex flex-row gap-4 justify-end'}>
                                                    <button className={'bg-white border border-solid border-[1.5px] border-main text-main font-medium px-[28px] h-[44px] rounded-full text-[16px] flex gap-2 items-center'}>
                                                        View Intro
                                                        <span className="flex items-center size-[20px] border-[1.5px] rounded-full border-[#002A48]">
                                                            <img src="/logos/Play_Circle.svg" alt=""/>
                                                        </span>
                                                    </button>
                                                    <button className={'bg-main border border-solid border-[1.5px] border-main text-white font-medium px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>Explore Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'block md:hidden'}>
                                <div className={'relative w-full h-[440px] flex flex-col bg-main rounded-[20px] overflow-hidden'}>
                                    <div className={'absolute -top-[300px] -left-[130px]  -rotate-60 size-[610px] bg-sec rounded-[45px]'}></div>
                                    <div className="flex flex-col z-40">
                                        <div className={'text-center py-[36px] px-[20px]'}>
                                            <span className={'font-bold text-[#002A48] text-[36px]/[54px]'}>One more friend</span><br/>
                                            <span className={'font-bold text-[#002A48] text-[24px]/[36px]'}>Thousands more fun!</span><br/>
                                            <div className={'flex justify-end w-full'}>
                                                <span className={'font-medium text-[12px] my-[20px] w-full'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                                            </div>
                                            <div className={'flex flex-row gap-4 justify-center'}>
                                                <button className={'bg-white border border-solid border-[1.5px] border-main text-main font-medium px-[15px] lg:px-[28px] h-[44px] rounded-full text-[16px] flex gap-2 items-center'}>
                                                    View Intro
                                                    <span className="flex items-center size-[20px] border-[1.5px] rounded-full border-[#002A48]">
                                                        <img src="/logos/Play_Circle.svg" alt=""/>
                                                    </span>
                                                </button>
                                                <button className={'bg-main border border-solid border-[1.5px] border-main text-white font-medium px-[15px] lg:px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>Explore Now</button>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="/pictures/petgroup.svg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className={'flex flex-row w-full gap-4'}>
                            <div className={'w-1/4 hidden sm:block'}>
                                <div className={'flex flex-col gap-5'}>
                                    <span className={'text-[24px] font-bold text-[#003459]'}>Filter</span>
                                    <div className={'flex flex-col gap-4'}>
                                        <div className={'flex flex-col gap-2'}>
                                            <span className={'text-[16px] font-bold'}>Gender</span>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Male
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Female
                                                </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={'flex flex-col gap-2'}>
                                            <span className={'text-[16px] font-bold'}>Color</span>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    <div className={'size-[15px] rounded-full bg-red-500'}></div>Red
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    <div className={'size-[15px] rounded-full bg-[#ffb672]'}></div>Apricot
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    <div className={'size-[15px] rounded-full bg-black'}></div>Black
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    <div className={'size-[15px] rounded-full bg-[#cecece]'}></div>Silver
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="flex gap-2 items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    <div className={'size-[15px] rounded-full bg-[#fff7ce]'}></div>Ton
                                                </label>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={'flex flex-col gap-2'}>
                                            <span className={'text-[16px] font-bold'}>Price</span>
                                            <div className={'flex gap-2'}>
                                                <Input type="number" placeholder="Min" />
                                                <Input type="number" placeholder="Max" />
                                            </div>
                                        </div>
                                        <hr/>
                                        <div className={'flex flex-col gap-2'}>
                                            <span className={'text-[16px] font-bold'}>Breed</span>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Small
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Medium
                                                </label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Checkbox id="terms" />
                                                <label
                                                    htmlFor="terms"
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                >
                                                    Large
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'w-full md:w-3/4 flex flex-col gap-5'}>
                                <span className={'text-[24px] font-bold text-[#003459]'}>Small dog</span>
                                <div className={'w-full grid grid-cols-2 lg:grid-cols-3 gap-4'}>
                                    <AnimalCard />
                                    <AnimalCard />
                                    <AnimalCard />
                                    <AnimalCard />
                                    <AnimalCard />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
};

export default Page;