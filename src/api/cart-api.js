export async function getCartItems(user_id) {
  try {
    return await axios.get('https://dummyjson.com/carts/' + user_id);
  } catch (error) {
    throw error
  }
}