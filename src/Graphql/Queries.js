import {gql} from "@apollo/client";
const GET_BLOGS_INFO = gql`
query  {
  posts {
    author {
      ... on Author {
        id
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
`

const GET_Author =gql`
query MyQuery {
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`


const GET_Author_info =gql`
query getAuthorinfo($slug:String!) {
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
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
`

const Get_blogs_info=gql`
query getBlogsinfo($slug:String!) {
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        name
        avatar {
          url
        }
        field
      }
    }
    content {
      html
    }
    title
    coverPhoto {
      url
    }
  }
}
`

const Get_Comment=gql`
query get_comments($slug:String!) {
  comments(where: {post: {slug: $slug}}) {
    id
    name
    text
  }
}
`

export {GET_BLOGS_INFO , GET_Author , GET_Author_info , Get_blogs_info ,Get_Comment}