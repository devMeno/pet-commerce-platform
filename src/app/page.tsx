import Navbar from "@/components/custom/navbar";
import Footer from "@/components/custom/footer";
import AnimalCard from "@/components/custom/animalCard";
import ProductCard from "@/components/custom/productCard";

export default function Home() {
    return (
        <>
            <div className={'flex gap-4 m-4'}>
                <AnimalCard />
                <ProductCard />
            </div>
        </>
    );
}
