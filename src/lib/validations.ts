import {z}  from 'zod';

const imageSchema = z
    .any()
    .refine((file) => file instanceof File, { message: 'Fichier invalide' })
    .refine((file) => ['image/jpeg', 'image/png'].includes(file.type), {
        message: 'Format invalide (JPEG, PNG)',
    })
    .refine((file) => file.size <= 2 * 1024 * 1024, {
        message: 'Taille trop grande (max 2 Mo)',
    })

export const userValidation = z.object({
    name: z.string().min(3),
    email: z.string().email('Email invalide'),
    password: z
        .string()
        .min(8, "Le mot de passe doit contenir au moins 8 caractères")
        .regex(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/,
            "Une majuscule, une minuscule, un chiffre et un caractère spécial sont requis"
        ),
    role: z.enum(["BUYER","SELLER"]),
})

export const animalValidationSchema = z.object({
    name: z.string().min(3, "Le nom est requis"),
    age: z.number().min(0, "L'âge doit être un nombre positif"),
    gender: z.enum(["MALE", "FEMALE"]),
    color: z.string().min(3, "La couleur est requise"),
    size: z.optional(),
    price: z.number().min(1, "Le prix doit être positif"),
    description: z.string().optional(),
    imaMALEgeUrl: imageSchema,
    category: z.enum(['CHIEN', 'CHAT', 'LAPIN', 'POISSON', 'OISEAU', 'REPTILE', 'AMPHIBIEN', 'RONGEUR', 'INVERTEBRE', 'FERME']),
    forAdoption: z.boolean(),
})

export const productValidationSchema = z.object({
    name: z.string().min(3, "Le nom est requis"),
    description: z.string().optional(),
    price: z.number().min(1, "Le prix doit être positif"),
    productImagesUrl: imageSchema
})