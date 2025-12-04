import database from 'infra/database.js';

export default async function status(req, res) {
  const result = await database.query('SELECT 1 + 1 as sum;');
  console.log(result.rows);
  const status = {
    status: res.statusCode,
    message: 'alunos do curso.dev são pessoas acima da média'
  };

  res.json(status);
}
