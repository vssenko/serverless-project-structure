'use strict';


module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: {
      message: 'ok',
      input: event,
    },
  };
};