export const GET_BLOG_ARTICLES_QUERY = `
  query GetBlogArticles($first: Int!) {
    articles(first: $first) {
      edges {
        node {
          id
          title
          handle
          excerpt
          excerptHtml
          content
          contentHtml
          publishedAt
          image {
            url
            altText
            width
            height
          }
          author {
            name
          }
          blog {
            handle
          }
          tags
        }
      }
    }
  }
`;

export const GET_ARTICLE_BY_HANDLE_QUERY = `
  query GetArticleByHandle($blogHandle: String!, $articleHandle: String!) {
    blog(handle: $blogHandle) {
      articleByHandle(handle: $articleHandle) {
        id
        title
        handle
        excerpt
        excerptHtml
        content
        contentHtml
        publishedAt
        image {
          url
          altText
          width
          height
        }
        author {
          name
        }
        tags
      }
    }
  }
`;

export const GET_BLOG_QUERY = `
  query GetBlog($handle: String!, $first: Int!) {
    blog(handle: $handle) {
      id
      title
      handle
      articles(first: $first) {
        edges {
          node {
            id
            title
            handle
            excerpt
            excerptHtml
            publishedAt
            image {
              url
              altText
              width
              height
            }
            author {
              name
            }
            tags
          }
        }
      }
    }
  }
`;
