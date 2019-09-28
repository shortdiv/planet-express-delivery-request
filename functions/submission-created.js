/* Triggered when a form submission is posted to your site. */
exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);
  console.log(body);
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(body)
  });
};
