import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import AnimalCard from "@/components/custom/animalCard";
import ProductCard from "@/components/custom/productCard";
import UserLayout from "@/components/custom/userLayout";

export default function Home() {
    return (
        <>
            <UserLayout>
            <div className={'flex gap-4 m-4'}>
                <AnimalCard />
                <ProductCard />
            </div>
            </UserLayout>
        </>
    );
}
