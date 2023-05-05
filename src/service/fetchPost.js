// fetchPosts.js

const fetchPosts = async () => {
    const response = await fetch('keditall');
    const data = await response.json();
    return data;
  };
  
  export default fetchPosts;
  