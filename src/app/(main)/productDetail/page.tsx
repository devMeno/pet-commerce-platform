'use client'
import React from 'react';
import UserLayout from "@/components/custom/userLayout";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ProductCard from "@/components/custom/productCard";
import AnimalCard from "@/components/custom/animalCard";


const Page = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const productImagesSrc = [
        "/pictures/petPicture.svg",
        "/pictures/petPicture2.svg",
        "/pictures/petPicture3.svg",
        "/pictures/petPicture4.svg",
        "/pictures/petPicture5.svg",
        "/pictures/petPicture2.svg",
    ]

    const customersPictureSrc = [
        "/pictures/customer1.svg",
        "/pictures/customer2.svg",
        "/pictures/customer3.svg",
        "/pictures/customer4.svg",
        "/pictures/customer1.svg",
        "/pictures/customer2.svg",
        "/pictures/customer3.svg"
    ]
    return (
        <UserLayout>
            <div className={'relative pt-[100px] pb-[40px]'}>
                <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-col gap-[20px] mx-auto'}>
                    <div className={'w-full px-0 md:p-[20px] rounded-[20px] border border-none lg:border-solid border-1 border-gray-100 flex flex-col lg:flex-row gap-[34px] justify-center'}>
                        <div className={'w-full md:w-1/2 flex flex-col gap-[17px]'}>
                            <div className={'flex flex-col gap-2'}>
                                <img src={productImagesSrc[currentImageIndex]} alt="" className={'w-full h-[476px] object-cover rounded-[12px]'}/>
                                <div className={'w-full overflow-x-scroll flex gap-[12px]'}>
                                    {
                                        productImagesSrc.map((productImage, index) => (
                                            <img src={productImagesSrc[index]}
                                                 alt=""
                                                 key={index}
                                                 className={'size-[94px] object-cover rounded-[6px] cursor-pointer'}
                                                 onMouseOver={event => setCurrentImageIndex(index)}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                            <div className={'bg-sec-min px-[12px] py-[9px] rounded-[10px] flex gap-4 text-[14px]'}>
                                <img src="/logos/Heart.svg" alt="" className={'size-[24px]'}/>
                                <span className={'font-semibold'}>100% health guarantee for pets</span>
                                <img src="/logos/pets.svg" alt="" className={'size-[24px]'}/>
                                <span className={'font-semibold'}>100% health guarantee for pets</span>
                            </div>
                        </div>
                        <div className={'w-full md:w-1/2 flex flex-col gap-[18px]'}>
                            <div className={'flex flex-col gap-2'}>
                                <span className={'text-[14px] text-gray-500'}>SKU #1000078</span>
                                <span className={'text-[24px] font-bold'}>Shiba Inu Sepia</span>
                                <span className={'text-[20px] font-bold'}>34.000.000 VND</span>
                            </div>
                            <div className={'flex gap-[10px] md:gap-[18px]'}>
                                <Button className={'bg-main text-white font-bold px-[28px] py-[14px] rounded-full text-[16px]'}>Contact us</Button>
                                <Button className={'bg-white border border-solid border-2 border-main text-main font-bold px-[28px] py-[14px] rounded-full text-[16px] flex items-center'}>
                                    <img src="/logos/chat.png" alt=""/>
                                    Chat with Monito
                                </Button>
                            </div>
                            <table className={'text-[14px] text-[#667479]'}>
                                <tbody>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px] w-2/5'}>SKU</td>
                                    <td>: #1000078</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Gender</td>
                                    <td>: Female</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Age</td>
                                    <td>: 2 months</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Size</td>
                                    <td>: Small</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Color</td>
                                    <td>: Appricot & Tan</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[8px]'}>Vaccinated</td>
                                    <td>: Yes</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Dewormed</td>
                                    <td>: Yes</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[8px]'}>Cert</td>
                                    <td>: Yes(MKA)</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Microship</td>
                                    <td>: Yes</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Location</td>
                                    <td>: Vietnam</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Published Date</td>
                                    <td>: 12-Oct-2022</td>
                                </tr>
                                <tr className={'border-b border-[#667479]'}>
                                    <td className={'py-[12px]'}>Additionnal Information</td>
                                    <td>: Pure breed Shih Tzu.
                                        Good body structure.
                                        With MKA cert and Microchip.
                                        Father from champion lineage.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[16px]'}>
                        <span className={'text-[24px] font-bold'}>Our lovely customer</span>
                        <div className={'w-full overflow-x-scroll flex gap-[12px]'}>
                            {
                                customersPictureSrc.map((picture, index) => (
                                    <img src={customersPictureSrc[index]}
                                         alt=""
                                         key={index}
                                         className={'w-[248px] h-[340px] object-cover rounded-[10px]'}
                                    />
                                ))
                            }
                        </div>
                    </div>
                    <div className={'flex flex-col gap-[16px]'}>
                        <div className={'flex flex-row items-center relative'}>
                            <div className={'flex flex-col gap-2'}>
                                <span>What new ?</span>
                                <span className={'text-[24px] font-bold'}>Take a look at some of our pets</span>
                            </div>
                            <div className={'hidden md:block '}>
                                <Button className={'absolute right-0 bg-white border border-solid border-2 border-main text-main font-bold px-[28px] py-[14px] rounded-full text-[16px] flex items-center'}>
                                    View more
                                </Button>
                            </div>
                        </div>
                        <div className={'w-full flex flex-wrap mx-auto'}>
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                            <AnimalCard />
                        </div>
                        <Button className={'md:hidden bg-white border border-solid border-2 border-main text-main font-bold px-[28px] py-[14px] rounded-full text-[16px] flex items-center'}>
                            View more
                        </Button>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
};

export default Page;