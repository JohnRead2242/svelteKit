async function load() {
  async function getPost() {
    let url = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(url);
    let data = await res.json();
    return data;
  }
  return {
    posts: await getPost()
  };
}
export {
  load
};
