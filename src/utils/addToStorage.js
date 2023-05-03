import { addedError, wave } from "../components/Providers/AuthProviders";

// use local storage to manage cart data
const addToDb = id => {
    let favoriteRecipe = getFavoriteRecipe();
    // add quantity
    const quantity = favoriteRecipe[id];
    if (!quantity) {
        favoriteRecipe[id] = 1;
        wave()
    }
    else {
       addedError()
    }
    localStorage.setItem('favoriteRecipe', JSON.stringify(favoriteRecipe));
}

const removeFromDb = id => {
    const favoriteRecipe = getFavoriteRecipe();
    if (id in favoriteRecipe) {
        delete favoriteRecipe[id];
        localStorage.setItem('favoriteRecipe', JSON.stringify(favoriteRecipe));
    }
}

const getFavoriteRecipe = () => {
    let favoriteRecipe = {};

    //get the favorite recipe from local storage
    const storedCart = localStorage.getItem('favoriteRecipe');
    if (storedCart) {
        favoriteRecipe = JSON.parse(storedCart);
    }
    return favoriteRecipe;
}

const deleteFavoriteRecipe = () => {
    localStorage.removeItem('favoriteRecipe');
}

export {
    addToDb,
    removeFromDb,
    getFavoriteRecipe,
    deleteFavoriteRecipe
}


// useEffect(() => {
//     const storedData = getFavoriteRecipe();
//     for (const id in storedData) {
//       const addedProduct = products.find((product) => product.id == id);
//       if (addedProduct) {
//         let quantity = storedData[id];
//         addedProduct.quantity = quantity;
//         console.log(addedProduct);
//       }
//     }
//   }, [products]);

//   const handleAddToCart = (product) => {
//     addToDb(product.id);
//   };

// const handleAddToCart = (product) => {
//     let newCart = [];
//     const exist = cart.find((pd) => pd.id == product.id);
//     if (!exist) {
//       product.quantity = 1;
//       newCart = [...cart, product];
//       setCart(newCart);
//     } else {
//       exist.quantity = exist.quantity + 1;
//       const remaining = cart.filter((pd) => pd.id !== product.id);
//       newCart = [...remaining, exist];
//     }
//     setCart(newCart);
//     addToDb(product.id);
//   };