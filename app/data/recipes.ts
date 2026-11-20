export type Recipe = {
  id: string;
  title: string;
  description: string;
  timeMinutes: number;
  difficulty: "Easy" | "Medium" | "Advanced";
  cuisine: string;
  category: string;
  art: string;
  artLabel: string;
  artClass: string;
};

export const recipes: Recipe[] = [
  {
    id: "citrus-salmon-bowl",
    title: "Citrus-glazed salmon bowl",
    description: "Flaky salmon, crisp greens, and a bright ginger-lime dressing.",
    timeMinutes: 25,
    difficulty: "Easy",
    cuisine: "Japanese-inspired",
    category: "Fresh & light",
    art: "🍣",
    artLabel: "A colorful salmon and rice bowl",
    artClass: "art-salmon",
  },
  {
    id: "creamy-tomato-orzo",
    title: "Creamy tomato orzo",
    description: "One-pan comfort with sweet tomatoes, basil, and parmesan.",
    timeMinutes: 30,
    difficulty: "Easy",
    cuisine: "Italian",
    category: "Weeknight",
    art: "🍅",
    artLabel: "Tomatoes and basil",
    artClass: "art-tomato",
  },
  {
    id: "green-goddess-wrap",
    title: "Green goddess crunch wrap",
    description: "Herby avocado sauce meets crunchy greens and chickpeas.",
    timeMinutes: 20,
    difficulty: "Easy",
    cuisine: "California",
    category: "Plant-powered",
    art: "🥑",
    artLabel: "Fresh avocado and greens",
    artClass: "art-green",
  },
  {
    id: "miso-mushroom-noodles",
    title: "Miso mushroom noodles",
    description: "Savory miso broth, golden mushrooms, and silky noodles.",
    timeMinutes: 35,
    difficulty: "Medium",
    cuisine: "Japanese",
    category: "Comfort food",
    art: "🍜",
    artLabel: "A steaming bowl of noodles",
    artClass: "art-noodles",
  },
  {
    id: "spiced-cauliflower-tacos",
    title: "Spiced cauliflower tacos",
    description: "Smoky roasted cauliflower with lime crema and pickled onion.",
    timeMinutes: 40,
    difficulty: "Medium",
    cuisine: "Mexican",
    category: "Plant-powered",
    art: "🌮",
    artLabel: "Tacos with fresh toppings",
    artClass: "art-taco",
  },
  {
    id: "berry-yogurt-pancakes",
    title: "Berry yogurt pancakes",
    description: "Fluffy, tangy pancakes topped with warm seasonal berries.",
    timeMinutes: 20,
    difficulty: "Easy",
    cuisine: "American",
    category: "Breakfast",
    art: "🫐",
    artLabel: "Pancakes with blueberries",
    artClass: "art-berry",
  },
];
