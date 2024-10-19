import { Bruschetta, GreekSalad, LemonDessert, Nachos } from "../../../assets";

export const meals = [
	{
		image: GreekSalad,
		name: "Greek Salad",
		about:
			"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		price: 12.99,
	},
	{
		image: LemonDessert,
		name: "Lemon Dessert",
		about:
			"This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		price: 4.99,
	},
	{
		image: Bruschetta,
		name: "Bruschetta",
		about:
			"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		price: 5.99,
	},
	{
		image: Nachos,
		name: "Nachos",
		about:
			"Tortilla chips topped with melted cheese, lettuce, sour cream, guacamole, jalapenos, and chipotle.",
		price: 6.99,
	},
];
