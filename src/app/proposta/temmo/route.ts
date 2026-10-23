import { propostaIndisponivel } from "@/lib/proposta-indisponivel";

export const dynamic = "force-static";

// Proposta desativada por enquanto; o conteúdo continua em src/proposals/temmo.html para reativar
export async function GET() {
  return propostaIndisponivel();
}
