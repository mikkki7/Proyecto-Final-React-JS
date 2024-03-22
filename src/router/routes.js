import { Cart } from "../components/pages/cart/Cart.jsx";
import { CheckOutContainer } from "../components/pages/checkOut/CheckOutContainer.jsx";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer.jsx";
import ItemListContainer from "../components/pages/itemList/ItemListContainer.jsx"
import NotFound from "../components/pages/notFound/NotFound.jsx";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },

    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },

    {
        id: "detail",
        path: "/item/:id",
        Element: ItemDetailContainer
    },

    {
        id: "cart",
        path: "/cart",
        Element: Cart
    },

    {
        id: "checkout",
        path: "/checkout",
        Element: CheckOutContainer
    },

    {
        id: "notfound",
        path: "/notfound",
        Element: NotFound
    },
]