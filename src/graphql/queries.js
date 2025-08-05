import { gql } from "@apollo/client";

const GET_BLOGS_INFO = gql`
  query {
    posts {
      author {
        ... on Author {
          name
          avatar {
            url
          }
        }
      }
      title
      slug
      id
      coverPhoto {
        url
      }
    }
  }
`;

const GET_AUTHORS_INFO = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthoInfo($slug: String!) {
    author(where: { slug: $slug }) {
      field
      name
      avatar {
        url
      }
      description {
        html
      }
      posts {
        coverPhoto {
          url
        }
        id
        slug
        title
      }
    }
  }
`;

const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        ... on Author {
          avatar {
            url
          }
          name
          field
        }
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
    }
  }
`;

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_INFO, GET_POST_INFO };
