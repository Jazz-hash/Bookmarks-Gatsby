var faunadb = require("faunadb"),
  q = faunadb.query

var client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET })

async function run() {
  try {
    // const results = await client.query(
    //   q.Update(q.Ref(q.Collection("todos"), "280170789352768005"), {
    //     data: {
    //       done: true,
    //     },
    //   })
    // );

    const results = await client.query(
      q.Create(q.Collection("bookmarks"), {
        data: {
          title: "Something",
          url: "dasdas",
        },
      })
    )

    // const results = await client.query(
    //   q.Paginate(q.Match(q.Index("todos_by_user"), "user-test"))
    // )

    console.log(results)
  } catch (error) {
    console.log(error)
  }
}
run()
