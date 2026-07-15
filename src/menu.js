import "./menu.css";

export default function loadPageDefault() {

    const contentContainer = document.querySelector("#content");
    const menuPage = document.createElement("div");
    menuPage.classList.add("menu-page");

    const menuElement = document.createElement("div");
    menuElement.id = "menu";

    const menu = {
        "Starters": {
            "Bruschetta": {
                "price": 6,
                "description": "Fresh tomato with basil and vinegar ontop crisp, toasted bread rubbed with garlic."
            },
            "Antipasto Platter": {
                "price": 21.50,
                "description": "A platter of fresh, delicious meats cheeses and olives."
            },
            "Mozzarella Sticks with Tomato Sauce": {
                "price": 7.50,
                "description": "Deep fried, crispy mozzarella sticks with a tangy and vibrant tomato sauce."
            }
        },

        "Mains": {
            "Spaghetti Bolognese": {
                "price": 19.50,
                "description": "Spaghetti pasta coated in a tangy, succulent ragu sauce, topped with gratedparmesan and basil."
            },
            "Margherita Pizza": {
                "price": 17.00,
                "description": "A stone-baked woodfire pizza base topped with a fresh tomato sauce, mozzarella and basil."
            },
            "Frutti di Mare": {
                "price": 22.00,
                "description": "Penne pasta with delicious seafood coated in garlic infused butter and fresh parsley."
            }
        },

        "Desserts": {
            "Panna Cotta": {
                "price": 6.50,
                "description": "Set dairy cream flavoured with sweet vanilla."
            },
            "Tiramisu": {
                "price": 9.50,
                "description": "Layers of coffee infused sponge fingers and whipped cream topped with cocoa powder."
            },
            "Gelato": {
                "price": 4.50,
                "description": "Frozen dairy with a silky, velvety texture ranging in flavours of: Vanilla, Strawberry and Chocolate."
            }
        }
    }

    for (const [section, dishes] of Object.entries(menu)) {
        const sectionDiv = document.createElement("div");
        const sectionHeader = document.createElement("h1");
        sectionHeader.textContent = section;
        sectionDiv.appendChild(sectionHeader);

        const dishesDiv = document.createElement("div");
        dishesDiv.classList.add("dishes");

        for (const [dishName, dishProperties] of Object.entries(dishes)) {
            const dishDiv = document.createElement("div")
            dishDiv.classList.add("dish");

            const dishTitle = document.createElement("h2");
            dishTitle.textContent = dishName;

            const dishPrice = document.createElement("p");
            dishPrice.textContent = `£${dishProperties.price}`;

            const dishDescription = document.createElement("p");
            dishDescription.textContent = dishProperties.description;

            dishDiv.appendChild(dishTitle);
            dishDiv.appendChild(dishPrice);
            dishDiv.appendChild(dishDescription);

            dishesDiv.appendChild(dishDiv);
        }
        sectionDiv.appendChild(dishesDiv);
        menuPage.appendChild(sectionDiv);
    }

    contentContainer.appendChild(menuPage);
}
