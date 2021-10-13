exports.handler = async function(event, context) {
    return {
      statusCode: 418,
      body: JSON.stringify({ message: "this is a test" }),
    };
  };
  