// models/logModel.js
const logs = [];

const addLog = (message) => {
  logs.push(message);
  return logs;
};

const getLogs = () => {
  return logs;
};

module.exports = {
  addLog,
  getLogs,
};
