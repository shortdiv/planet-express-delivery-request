/* Triggered when a form submission is posted to your site. */
const faunadb = require("faunadb");
const q = faunadb.query;

const client = new faunadb.Client({ secret: process.env.VUE_APP_FAUNA_SECRET });

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body).payload;
  const {
    contents,
    chosenCrew,
    recipient,
    destination,
    notes,
    appearances
  } = body.data;
  client
    .query(
      q.Create(q.Class("deliveries"), {
        data: {
          Contents: contents,
          Crew: chosenCrew.split(","),
          Recipient: recipient,
          Destination: destination,
          Notes: notes,
          Appearance: appearances,
          status: "pending"
        }
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
