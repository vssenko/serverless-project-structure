const formatResult = (result) => ({
  statusCode: result? 200: 204,
  body: result
});

const formatError = (e) => ({
  statusCode: e.status || 500,
  error: e
});


module.exports = function handlerWrapper(handler){
  return async (event) => {
    try{
      const result = await handler(event);
      return formatResult(result);
    } catch(e){
      return formatError(e);
    }
  };
}