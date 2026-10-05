/**
 * Imagem de compartilhamento gerada pela rota /og, com o título da página.
 * Fica relativa: o metadataBase do layout transforma em endereço completo.
 */
export const imagemOg = (titulo: string, rotulo: string) => ({
  url: `/og?titulo=${encodeURIComponent(titulo)}&rotulo=${encodeURIComponent(rotulo)}`,
  width: 1200,
  height: 630,
  alt: titulo,
});
