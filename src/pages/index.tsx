import React from "react"
import { useQuery, useMutation } from "@apollo/client"
import Card from "../components/Card"
import gql from "graphql-tag"
import "./index.css"
import TextField from "@material-ui/core/TextField/TextField"
import { Button } from "@material-ui/core"
import Header from "../components/Header"
const GET_BOOKMARKS = gql`
  {
    bookmarks {
      id
      title
      url
    }
  }
`
const ADD_BOOKMARK = gql`
  mutation addBookmark($url: String!, $title: String!) {
    addBookmark(url: $url, title: $title) {
      id
    }
  }
`
export default function Home() {
  const { data, loading, error } = useQuery(GET_BOOKMARKS)
  const [addBookmark] = useMutation(ADD_BOOKMARK)
  let titleField, urlField
  const handleSubmit = () => {
    if (titleField.value != "" && urlField.value != "") {
      addBookmark({
        variables: {
          title: titleField.value,
          url: urlField.value,
        },
        refetchQueries: [{ query: GET_BOOKMARKS }],
      })
      titleField.value = ""
      urlField.value = ""
    } else {
      alert("Please fill in the required fields !!")
    }
  }

  return (
    <div>
      <Header />
      <form>
        <div className="form">
          <TextField
            variant="outlined"
            className="input"
            label="Bookmark Title"
            color="secondary"
            required={true}
            inputRef={node => (titleField = node)}
          />

          <TextField
            variant="outlined"
            color="secondary"
            required={true}
            label="Bookmark Url"
            className="input"
            inputRef={node => (urlField = node)}
          />
        </div>
        <br />
        <br />
        <div className="button">
          <Button
            variant="contained"
            style={{ width: "620px" }}
            className="bg"
            onClick={handleSubmit}
          >
            Add Bookmark
          </Button>
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>Bookmarks</h1>
      <div className="cards">
        {data?.bookmarks.map(({ url, title, id }) => (
          <Card url={url} title={title} id={id} />
        ))}
      </div>
    </div>
  )
}
