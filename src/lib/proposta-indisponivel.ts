// Página mostrada no lugar de uma proposta desativada. O HTML da proposta continua em src/proposals para reativar depois.
export function propostaIndisponivel() {
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>Proposta UPDO</title>
<link rel="icon" href="/Imagens/favicon%20agencia%20updo.png">
<style>
  html,body{height:100%;margin:0}
  body{display:flex;align-items:center;justify-content:center;background:#0a1524;color:#f2f5fa;font-family:Inter,system-ui,-apple-system,sans-serif;text-align:center;padding:24px;box-sizing:border-box}
  img{height:40px;margin-bottom:32px}
  h1{font-size:26px;font-weight:700;margin:0 0 12px}
  p{font-size:16px;color:#9aa8bb;margin:0;line-height:1.5}
  a{color:#56fed5;text-decoration:none}
</style>
</head>
<body>
  <div>
    <img src="/Imagens/Logo%20UPDO%202024%20Branca.svg" alt="UPDO">
    <h1>Esta proposta não está disponível no momento.</h1>
    <p>Fale com a UPDO para receber uma versão atualizada. <a href="https://www.updo.com.br">updo.com.br</a></p>
  </div>
</body>
</html>`;
  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "x-robots-tag": "noindex, nofollow",
      "cache-control": "public, max-age=0, must-revalidate",
    },
  });
}
