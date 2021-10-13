const handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const subject = requestBody.value;
    console.log(event.body);
  
    if(subject) {
      return{
        statusCode: 200,
        body: JSON.stringify({ message: `Your message :${subject}` }),
      }
    } else {
      return { statusCode: 400, body: "Aucun message n'a été envoyé" }
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
