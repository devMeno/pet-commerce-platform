import React from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const Footer = () => {
    return (
        <div className={'w-full bg-sec-min pt-[20px] lg:pt-[100px] pb-[40px] rounded-tl-[15px] rounded-tr-[15px] lg:rounded-tl-[50px] lg:rounded-tr-[50px]'}>
            <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-col gap-[40px] mx-auto'}>
                <div className={'p-[20px] lg:p-[32px] w-full flex flex-col lg:flex-row gap-4 text-white rounded-[20px] bg-main justify-between'}>
                    <p className={'text-[20px] lg:text-[24px] font-bold text-center lg:text-left'}>Register now so you don't miss our programs</p>
                    <div className="flex flex-col lg:flex-row w-full items-center gap-2 bg-white p-4 rounded-[14px]">
                        <Input className={'h-[48px] text-main'} type="email" placeholder="Email" />
                        <Button className={'h-[48px] text-white bg-main w-full lg:w-fit'} type="submit">Subscribe now</Button>
                    </div>
                </div>
                <div className={'flex flex-col lg:flex-row flex-wrap gap-4 justify-between'}>
                    <div className={'flex flex-row gap-4 lg:gap-10 w-full lg:w-fit justify-between'}>
                        <span>Home</span><span>Category</span><span>About</span><span>Contact</span>
                    </div>
                    <div className={'flex flex-row gap-4 w-fit mx-auto lg:mx-0'}>
                        <img src="/logos/Twitter.svg" alt=""/>
                        <img src="/logos/Instagram.svg" alt=""/>
                        <img src="/logos/Facebook.svg" alt=""/>
                        <img src="/logos/YouTube.svg" alt=""/>
                    </div>
                </div>
                <hr/>
                <div className={'flex flex-col lg:flex-row flex-wrap gap-4 justify-between'}>
                    <span className={'w-fit mx-auto lg:mx-0'}>© 2022 Monito. All rights reserved.</span>
                    <img src="/logos/Logo.svg" alt=""/>
                    <div className={'flex flex-row gap-4 lg:gap-10 w-fit mx-auto lg:mx-0'}>
                        <span>Terms of Service</span><span>Privacy Policy</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;