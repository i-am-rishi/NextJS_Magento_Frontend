export async function usePostRequest({query, variables}) {

    const fetchStoreConfig = async (query, variables) => {

        try {
          const res = query && await fetch('<MAGENTO_BACKEND_URL>/graphql', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              query,
              variables,
            }),
          });
      
          // Check if the HTTP response is not OK
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
      
          const data = await res.json();
      
          // Check for GraphQL errors
          if (data.errors) {
            console.error("GraphQL Errors:", data.errors);
            throw new Error(`GraphQL Error: ${JSON.stringify(data.errors)}`);
          }
      
          return data;
        } catch (error) {
          console.error("Fetch Error:", error);
          throw error; // Rethrow the error for further handling if needed
        }
      };

  return {
    data : query ? await fetchStoreConfig(query, variables) : null
  }
}
