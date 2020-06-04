export const fetchUsers = async () => {
  try {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.toJson();
    return data;
  } catch (e) {
    console.log(e);
  }
};
