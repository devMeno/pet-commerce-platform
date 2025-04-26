import prisma from "@/lib/prisma";
import {userValidation} from "@/lib/validations";

export async function addUser(formdata: FormData): Promise<> {
    const verifiedData = userValidation.safeParse({
        name: formdata.get("name"),
        email: formdata.get("email"),
        password: formdata.get("password"),
        role: formdata.get("role"),
        profilImageUrl: formdata.get("profilImageUrl"),
    })

    if (!verifiedData.success) {
        console.log('Invalid user data');
        return {error: true, message: verifiedData.error.flatten().fieldErrors};
    }
    console.log(verifiedData);

    const {name, email, password, role, profilImageUrl} = verifiedData.data;

    await prisma.User.create({
        data: {
            name: name,
            email: email,
            password: password,
            role: role,
            profilImageUrl: profilImageUrl,
        }
    })

    return {succes: true}
}