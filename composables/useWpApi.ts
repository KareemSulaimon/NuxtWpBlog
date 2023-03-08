 export default () => {
    const config = useRuntimeConfig();
        const wpUrl = config.public.wpUrl;
     // Get 

     const get = async <T>(endpoint:string) =>  useFetch <T>(`${wpUrl}/wp-json/wp/v2/${endpoint}`);
     
    
     // Get all post$

     const getPosts = async <T>( 
        categories?: number,
        page: number=1,
        perPage: number = 9 
      ) => {
        let query = `posts?_embed&per_page=${perPage}&page=${page}`;

        if(categories) {
            query+= `&categories=${categories}`
        };  
         return get <T>(query)
      };
     
    //  Get a Single Post
 
    const getPost = async <T>(slug:string) => get<T>(`posts?slug=${slug}&_embed`);
    
    // Get all Categories

    const getCategories =async <T>() =>  get<T>("categories")
    
    // Get a single Categories
    const getCategory =async <T>(slug: string) => get<T>(`categories?slug=${slug}`)


    return {
       get, getPost,getPosts,getCategories,getCategory 
    }
 }