const redis = require('redis');
const client = redis.createClient();

client.on('connect', () => {
  console.log('Cliente redis conectado');
});

client.on('error', () => {
  console.log(`Alguma coisa deu errado: ${err}`);  
});

client.set('cliente', 'Rodrigo', redis.print);
client.get('usuario', (error, result) => {
  if(error) {
    console.log(error);
    throw error;
  }

  console.log(`Resultado -> ${result}`);
});