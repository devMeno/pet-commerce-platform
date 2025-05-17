import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import {Input} from "@/components/ui/input";
import AnimalCard from "@/components/custom/animalCard";
import ProductCard from "@/components/custom/productCard";
import UserLayout from "@/components/custom/userLayout";
import {Button} from "@/components/ui/button";
import {InfiniteSlider} from "@/components/ui/infinite-slider";

const Page = () => {
    return (
        <UserLayout>
            <div className={'relative w-full h-[695px] rounded-b-[15px] lg:rounded-b-[50px] bg-sec-min overflow-hidden'}>
                <div className={'flex flex-row w-full'}>
                    <div className={'absolute -top-[570px] -left-[200px] rotate-26 size-[635px] bg-sec rounded-[99px]'}></div>
                    <div className={'hidden lg:block absolute top-[200px] left-[170px] rotate-26 size-[100px] bg-sec rounded-[35px]'}></div>
                    <div className={'absolute right-[150px] md:[350px] lg:right-[710px] top-[200px] z-30 rotate-15 size-[10px] md:size-[30px] bg-main rounded-[4px] md:rounded-[10px]'}></div>
                    <div className={'absolute right-[150px] md:[350px] lg:right-[710px] top-[200px] z-20 rotate-35 size-[15px] md:size-[40px] bg-sec rounded-[4px] md:rounded-[10px]'}></div>
                    <div className={'absolute -right-[330px] lg:right-[150px] top-[350px] z-20 rotate-15 size-[635px] bg-main rounded-[99px]'}></div>
                    <div className={'absolute -right-[395px] lg:right-[85px] top-[320px] z-20 rotate-35 size-[635px] bg-sec rounded-[99px]'}></div>
                </div>
            </div>
            <div className={'relative pt-[100px] pb-[40px]'}>
                <div className={'max-w-[1180px] w-[94%] xl:w-[80%] flex flex-col gap-[20px] mx-auto'}>
                    <div className={'flex flex-col gap-[60px]'}>
                        <section className={'flex flex-col gap-4'}>
                            <div className={'flex flex-row items-center justify-between'}>
                                <div className={'flex flex-col'}>
                                    <span>What new ?</span>
                                    <span className={'text-[24px] font-bold'}>Take a look at some of our pets</span>
                                </div>
                                <div className={'hidden md:block '}>
                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                        View more
                                    </Button>
                                </div>
                            </div>
                            <div className={'w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8'}>
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                                <AnimalCard />
                            </div>
                        </section>

                        <section className={'flex flex-col gap-4'}>
                            <div className={'flex flex-row items-center justify-between'}>
                                <div className={'flex flex-col'}>
                                    <span>Hard to choose right products for your pets ?</span>
                                    <span className={'text-[24px] font-bold'}>Our Products</span>
                                </div>
                                <div className={'hidden md:block '}>
                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                        View more
                                    </Button>
                                </div>
                            </div>
                            <div className={'w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8'}>
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                                <ProductCard />
                            </div>
                        </section>

                        <section className={'flex flex-col gap-4'}>
                            <div className={'flex flex-row items-center justify-between'}>
                                <div className={'flex flex-row gap-4 items-center'}>
                                    <span>Proud to be part of</span>
                                    <span className={'text-[24px] font-bold'}>Pet Sellers</span>
                                </div>
                                <div className={'hidden md:block '}>
                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                        View more
                                    </Button>
                                </div>
                            </div>
                            <InfiniteSlider durationOnHover={75} gap={24}>
                                <img
                                    src="/logos/petSellers/logo1.svg"
                                    alt="Dean blunt - Black Metal 2"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo2.svg"
                                    alt="Jungle Jack - JUNGLE DES ILLUSIONS VOL 2"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo3.svg"
                                    alt="Yung Lean - Stardust"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo4.svg"
                                    alt="Lana Del Rey - Ultraviolence"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo5.svg"
                                    alt="A$AP Rocky - Tailor Swif"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo6.svg"
                                    alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                                <img
                                    src="/logos/petSellers/logo7.svg"
                                    alt="Midnight Miami (feat Konvy) - Nino Paid, Konvy"
                                    className="aspect-square w-[50px] md:w-[120px] rounded-[4px]"
                                />
                            </InfiniteSlider>
                        </section>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Page;