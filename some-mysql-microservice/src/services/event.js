const { Event } = require('../models');

async function saveEvent(payload){
  const createdEvent = await Event.create({
    payload
  });

  return createdEvent;
}

module.exports = {
  saveEvent
};