'use server'
import {prisma} from "@/lib/prisma";
import {userValidation} from "@/lib/validations";
import bcrypt from 'bcryptjs';

export async function addUser(formdata: FormData): Promise<{ success?: boolean; error?: boolean; message?: any }> {
    try {
        console.log(formdata);

        const verifiedData = userValidation.safeParse({
            name: formdata.get("name"),
            email: formdata.get("email"),
            password: formdata.get("password"),
            role: 'BUYER',
        })
        console.log(verifiedData);

        if (!verifiedData.success) {
            console.log('Invalid user data');
            return {error: true, message: verifiedData.error.flatten().fieldErrors};
        }
        console.log(verifiedData);

        const {name, email, password, role} = verifiedData.data;

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                role,
                profilImageUrl: ''
            }
        })

        return {success: true}
    }catch (error) {
        console.error('Erreur lors de la création de l’utilisateur :', error)
        return {
            error: true,
            message: 'Erreur serveur',
        }
    }
}