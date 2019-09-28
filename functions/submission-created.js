/* Triggered when a form submission is posted to your site. */
const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.VUE_APP_FAUNA_SECRET });

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body).payload;

  client
    .query(
      q.Create(q.Class("deliveries"), {
        data: body
      })
    )
    .then(ret => {
      console.log(ret);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(body)
      });
    })
    .catch(err => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(err)
      });
    });
};
