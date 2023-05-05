const fetchKedit = async () => {
    try {
      const response = await fetch('dbdata.js');
      const data = await response.json();
      console.log(data)
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  export default fetchKedit;
  