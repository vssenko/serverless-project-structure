function log(...params){
  console.log(...params);
}

function error(...e){
  console.error(...e);
}

module.exports = {
  log,
  error
};