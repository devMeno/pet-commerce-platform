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
                    <div className={'hidden lg:block absolute top-[200px] left-[170px] rotate-26 size-[75px] bg-sec rounded-[20px]'}></div>
                    <div className={'absolute right-[150px] md:[350px] lg:right-[710px] top-[200px] z-30 rotate-15 size-[10px] md:size-[30px] bg-main rounded-[4px] md:rounded-[10px]'}></div>
                    <div className={'absolute right-[150px] md:[350px] lg:right-[710px] top-[200px] z-20 rotate-35 size-[15px] md:size-[40px] bg-sec rounded-[4px] md:rounded-[10px]'}></div>
                    <div className={'absolute -right-[330px] lg:right-[150px] top-[350px] z-20 rotate-15 size-[635px] bg-main rounded-[99px]'}></div>
                    <div className={'absolute -right-[395px] lg:right-[85px] top-[320px] z-20 rotate-35 size-[635px] bg-sec rounded-[99px]'}></div>
                    <div className={'max-w-[1180px] w-[94%] xl:w-[80%] flex flex-col md:flex-row mx-auto z-40'}>
                        <div className={'w-full h-full md:w-2/3 flex flex-col gap-4 mt-[200px]'}>
                            <span className={'font-bold text-[60px]/[68px]'}>One more friend</span>
                            <span className={'font-bold text-[38px] md:text-[46px]/[60px]'}>Thousands more fun!</span>
                            <span className={'font-medium text-[16px] my-[10px] max-w-[480px]'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                            <div className={'flex flex-row gap-4'}>
                                <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                    View more
                                </Button>
                                <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                    View more
                                </Button>
                            </div>
                        </div>
                        <div className={''}>
                            <img src="/pictures/pet_banner_pic.svg" alt="" className={'h-[600px] bottom-0'}/>
                        </div>
                    </div>
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

                        <section>
                            <div className={'hidden md:block'}>
                                <div className={'relative w-full h-[378px] flex flex-row bg-main rounded-[20px] overflow-hidden'}>
                                    <div className={'absolute top-[200px] -left-[150px] rotate-26 size-[787px] bg-main-min rounded-[99px]'}></div>
                                    <div className={'absolute -top-[420px] -right-[200px] rotate-26 size-[787px] bg-sec rounded-[99px]'}></div>
                                    <div className={'flex flex-row px-[30px] lg:px-[75px] z-40'}>
                                        <div className={'flex items-end'}>
                                            <img src="/pictures/kisse.png" alt="" className={'bottom-0'}/>
                                        </div>
                                        <div className={'h-full lg:w-2/3 flex items-center'}>
                                            <div className={'flex flex-col text-right h-fit'}>
                                                <span className={'font-bold text-[52px]/[68px]'}>One more friend</span>
                                                <span className={'font-bold text-[36px]/[60px]'}>Thousands more fun!</span>
                                                <div className={'flex justify-end w-full'}>
                                                    <span className={'font-medium text-[12px] my-[15px] w-full lg:w-2/3'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                                                </div>
                                                <div className={'flex flex-row gap-4 justify-end'}>
                                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                        View more
                                                    </Button>
                                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                        View more
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={'block md:hidden'}>
                                <div className={'relative w-full h-[640px] flex flex-col bg-main rounded-[20px] overflow-hidden'}>
                                    <div className={'absolute -top-[300px] -left-[130px]  -rotate-60 size-[610px] bg-sec rounded-[45px]'}></div>
                                    <div className={'absolute -bottom-[450px] -left-[130px]  -rotate-60 size-[610px] bg-main-min rounded-[45px]'}></div>
                                    <div className="flex flex-col z-40">
                                        <div className={'text-center py-[36px] px-[20px]'}>
                                            <span className={'font-bold text-[36px]/[54px]'}>One more friend</span><br/>
                                            <span className={'font-bold text-[24px]/[36px]'}>Thousands more fun!</span><br/>
                                            <div className={'flex justify-end w-full'}>
                                                <span className={'font-medium text-[12px] my-[20px] w-full'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                                            </div>
                                            <div className={'flex flex-row gap-4 justify-center'}>
                                                <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                    View more
                                                </Button>
                                                <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                    View more
                                                </Button>
                                            </div>
                                        </div>
                                        <div>
                                            <img src="/pictures/kisse.png" alt="" className={'h-[349px] w-[524px]'}/>
                                        </div>
                                    </div>
                                </div>
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

                        <section>
                            <div className={'hidden md:block'}>
                                <div className={'relative w-full h-[378px] flex flex-row bg-main rounded-[20px] overflow-hidden'}>
                                    <div className={'absolute top-[200px] -left-[150px] rotate-26 size-[787px] bg-main-min rounded-[99px]'}></div>
                                    <div className={'absolute -top-[420px] -right-[200px] rotate-26 size-[787px] bg-sec rounded-[99px]'}></div>
                                    <div className={'flex flex-row px-[30px] lg:px-[75px] z-40'}>
                                        <div className={'flex items-end'}>
                                            <img src="/pictures/kisse.png" alt="" className={'bottom-0'}/>
                                        </div>
                                        <div className={'h-full lg:w-2/3 flex items-center'}>
                                            <div className={'flex flex-col text-right h-fit'}>
                                                <span className={'font-bold text-[52px]/[68px]'}>One more friend</span>
                                                <span className={'font-bold text-[36px]/[60px]'}>Thousands more fun!</span>
                                                <div className={'flex justify-end w-full'}>
                                                    <span className={'font-medium text-[12px] my-[15px] w-full lg:w-2/3'}>Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</span>
                                                </div>
                                                <div className={'flex flex-row gap-4 justify-end'}>
                                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                        View more
                                                    </Button>
                                                    <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] h-[44px] rounded-full text-[16px] flex items-center'}>
                                                        View more
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Page;