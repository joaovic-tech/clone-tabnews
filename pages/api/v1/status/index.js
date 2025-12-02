export default function status(req, res) {
  const status = {
    status: res.statusCode,
    message: 'alunos do curso.dev são pessoas acima da média'
  };

  res.json(status);
}