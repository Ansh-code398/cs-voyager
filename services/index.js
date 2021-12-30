import axios from 'axios';
const API = process.env.NEXT_PUBLIC_CSVOYAGER_API_URL;

export const getPosts = async () => {
  
  const result = await axios.get(`${API}/posts?`,);

  return result;
};

export const getCategories = async () => {

  const result = await axios.get(`${API}/categories`);
  
  return result.data;
};

export const getPostDetails = async (slug) => {

  const result = await axios.get(`${API}/posts/${slug}`);

  return result.data;
};

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {slug_not: $slug, AND: {categories_some: {slug_in: $categories}}}
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, categories });

  return result.posts;
};


export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};
