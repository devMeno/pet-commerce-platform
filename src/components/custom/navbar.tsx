import React from 'react';
import {Button} from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const Navbar = () => {
    return (
        <div className={'absolute top-0 left-0 w-full z-40'}>
            <div className={'hidden md:block'}>
                <div className={'max-w-[1180px] w-[94%] lg:w-[80%] flex flex-row mx-auto items-center justify-between py-[28px]'}>
                    <button>
                        <img src="/logos/Logo.svg" alt=""/>
                    </button>
                    <ul className={'flex gap-[48px] font-semibold'}>
                        <li>Home</li>
                        <li>Category</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <Button className={'h-[48px] rounded-full font-bold text-white bg-main w-fit'} type="submit">Subscribe now</Button>
                </div>
            </div>

            <div className={'block md:hidden'}>
                <div className={'w-full flex px-[14px] py-[10px] justify-between'}>
                    <Sheet>
                        <SheetTrigger>
                            <img src="/logos/Vector.svg" alt=""/>
                        </SheetTrigger>
                        <SheetContent side={'left'}>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <button>
                        <img src="/logos/Logo.svg" alt=""/>
                    </button>
                    <Sheet>
                        <SheetTrigger>
                            <img src="/logos/Search.svg" alt=""/>
                        </SheetTrigger>
                        <SheetContent side={'right'}>
                            <SheetHeader>
                                <SheetTitle>Are you absolutely sure?</SheetTitle>
                                <SheetDescription>
                                    This action cannot be undone. This will permanently delete your account
                                    and remove your data from our servers.
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
};

export default Navbar;