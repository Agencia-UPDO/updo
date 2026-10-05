import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const MENTA = '#56fed5';
const NAVY = '#0a1220';

// Imagem de compartilhamento (WhatsApp, LinkedIn etc.) gerada para cada página.
// Uso: /og?titulo=...&rotulo=...
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const titulo = (searchParams.get('titulo') || 'Marketing, vendas e dados para crescer com previsibilidade').slice(0, 110);
  const rotulo = (searchParams.get('rotulo') || 'UPDO').slice(0, 40);
  const logo = new URL('/Imagens/Logo%20UPDO%202024%20Branca.svg', request.url).toString();

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: NAVY,
          backgroundImage: `radial-gradient(circle at 85% 15%, rgba(101,117,255,0.35), transparent 45%), radial-gradient(circle at 10% 110%, rgba(86,254,213,0.25), transparent 45%)`,
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logo} height={60} width={167} alt="UPDO" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 22,
              color: 'rgba(255,255,255,0.75)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: 999,
              padding: '10px 22px',
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 5, background: MENTA }} />
            {rotulo}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: titulo.length > 70 ? 56 : 66,
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: -1.5,
              maxWidth: 1000,
              display: 'flex',
            }}
          >
            {titulo}
          </div>
          <div style={{ width: 120, height: 10, borderRadius: 5, background: MENTA }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24 }}>
          <div style={{ color: 'rgba(255,255,255,0.6)' }}>Marketing, vendas, CRM, dados e IA · Curitiba</div>
          <div style={{ color: MENTA, fontWeight: 600 }}>updo.com.br</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
