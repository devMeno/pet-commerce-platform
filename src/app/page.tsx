import {redirect} from "next/navigation";
import AnimalCard from "@/components/custom/animalCard";
import ProductCard from "@/components/custom/productCard";
import UserLayout from "@/components/custom/userLayout";

export default function Home() {
    return (
        redirect('/home')
    );
}
