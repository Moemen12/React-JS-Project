import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading,setIsLoading] = useState(true)
  const [isError,setIsError] = useState(false)
  const [user,setUser] = useState(null)

  const fetchUser = async()=>{
    try {
      const response = await fetch(url)
      if(!response.ok){
        setIsError(true)
        setIsLoading(false)
      }
      const user = await response.json()
      setUser(user)
      console.log(user);
    } catch (error) {
      setIsError(true);
       console.log(error);       
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchUser()
  },[])


  if(isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>There was an error...</h2>
  }


  const {avatar_url,name,company,bio} = user
  return <div>
    <img style={{ width:'150px',borderRadius:'25px' }} src={avatar_url} alt={name} />
    <h2>{name}</h2>
    <h4>works at {company}</h4>
    <p>{bio}</p>
  </div>;
};
export default MultipleReturnsFetchData;
