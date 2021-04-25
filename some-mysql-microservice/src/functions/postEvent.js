const _ = require('lodash');
const handlerWrapper = require('../utils/handlerWrapper');
const eventService = require('../services/event');

async function handler(event = {}) {
  const eventBody = _.get(event, ['Records', '0', 'body'], event);
  const createdEvent = await eventService.saveEvent(eventBody);
  return createdEvent;
};

module.exports.handler = handlerWrapper(handler);