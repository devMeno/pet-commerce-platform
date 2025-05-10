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
                <div className={'relative pt-[100px] pb-[40px]'}>
                    <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-col gap-[20px] mx-auto'}>
                        <div className={'flex flex-row w-full gap-4'}>
                            <div className={'w-1/4 hidden sm:block'}>
                                <div className={'flex flex-col gap-5'}>
                                    <span className={'text-[24px] font-bold'}>Filter</span>
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
                                <span className={'text-[24px] font-bold'}>Small dog</span>
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