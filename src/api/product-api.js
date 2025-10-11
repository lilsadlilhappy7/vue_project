export async function getAllProducts() {
  try {
    const result = await axios.get('https://dummyjson.com/products');
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getProductsByCategory(category_name) {
  try {
    const result = await axios.get('https://dummyjson.com/products/category/' + category_name);
    return result;
  } catch (error) {
    throw error;
  }
}