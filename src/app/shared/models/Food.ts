export class Food {
    id!: number;
    name!: string;
    price!: number;
    tag?: string[];
    favorite: boolean = false;
    imageUrl!: string;
    origins!: string[];
    cookTime!: string;
}