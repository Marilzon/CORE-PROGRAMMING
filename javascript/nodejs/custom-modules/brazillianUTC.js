const states = [
  { name: "Acre", utc: -5 },
  { name: "Alagoas", utc: -3 },
  { name: "Amapá", utc: -4 },
  { name: "Amazonas", utc: -4 },
  { name: "Bahia", utc: -3 },
  { name: "Ceará", utc: -3 },
  { name: "Distrito Federal", utc: -3 },
  { name: "Espírito Santo", utc: -3 },
  { name: "Goiás", utc: -3 },
  { name: "Maranhão", utc: -3 },
  { name: "Mato Grosso", utc: -4 },
  { name: "Mato Grosso do Sul", utc: -4 },
  { name: "Minas Gerais", utc: -3 },
  { name: "Pará", utc: -4 },
  { name: "Paraíba", utc: -3 },
  { name: "Paraná", utc: -3 },
  { name: "Pernambuco", utc: -3 },
  { name: "Piauí", utc: -3 },
  { name: "Rio de Janeiro", utc: -3 },
  { name: "Rio Grande do Norte", utc: -3 },
  { name: "Rio Grande do Sul", utc: -3 },
  { name: "Rondônia", utc: -4 },
  { name: "Roraima", utc: -4 },
  { name: "Santa Catarina", utc: -3 },
  { name: "São Paulo", utc: -3 },
  { name: "Sergipe", utc: -3 },
  { name: "Tocantins", utc: -3 },
];

const getBrazillianLocalTime = () => {
  const dateUTC = new Date();
  const timeUTC = dateUTC.getUTCHours();
  const minutesUTL = dateUTC.getUTCMinutes();

  for (let state of states) {
    const localTime = `${timeUTC} ${state.utc}`;
    const localMinute = `${minutesUTL}`;

    console.log(`Time in ${state.name}: ${localTime}:${localMinute}`);
  }
};

module.exports = { getBrazillianLocalTime };
