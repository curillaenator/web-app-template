export const queries = {
  episodes: (page: number = 1) => `
    query Episodes {
      episodes (page: ${page}) {
        results {
          id
          name
          episode
          characters {
            name
          }
          created
        }
      }
    }
  `,

  episode: () => `
    
  `,
};
