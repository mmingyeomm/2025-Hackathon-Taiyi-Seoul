import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* 히어로 섹션 */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12 py-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-pink)] gradient-animate">
              BAY의
            </span>
            <br />
            <span className="fade-in delay-200">분산형 금융 플랫폼</span>
          </h1>
          <p className="text-lg opacity-80 fade-in delay-300">
            Portal Trade에서 자산을 공급하고 이자를 받거나, 담보를 제공하고 대출을 받으세요.
            간편하고 안전한 DeFi 경험을 제공합니다.
          </p>
          <div className="flex flex-wrap gap-4 fade-in delay-400">
            <Link href="/supply" className="link-button shine">
              자산 예치하기
            </Link>
            <Link href="/borrow" className="link-button link-button-pink shine">
              자금 대출받기
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center fade-in delay-300">
          <div className="relative w-64 h-64 md:w-80 md:h-80 pulse">
            <div className="absolute inset-0 rounded-full bg-[var(--pastel-blue)] opacity-30 blur-3xl"></div>
            <div className="absolute inset-10 rounded-full bg-[var(--pastel-pink)] opacity-30 blur-3xl"></div>
            <div className="relative card p-6 z-10 backdrop-blur-sm bg-white/50 dark:bg-black/30 w-full h-full rounded-3xl flex items-center justify-center bg-flow">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3">총 예치 자산</h3>
                <p className="text-3xl font-bold mb-4">$10,257,892</p>
                <p className="text-sm opacity-70">24시간 전보다 +2.5% 증가</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 인기 마켓 섹션 */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-6 fade-in">인기 마켓</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['이더리움', '비트코인', '솔라나'].map((asset, index) => (
            <div key={index} className={`card p-6 fade-in delay-${(index + 1) * 100}`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--pastel-blue)]"></div>
                <div>
                  <h3 className="font-semibold">{asset}</h3>
                  <p className="text-sm opacity-70">APY: 3.2%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="opacity-70">총 공급량</p>
                  <p className="font-semibold">$2.5M</p>
                </div>
                <div>
                  <p className="opacity-70">총 대출량</p>
                  <p className="font-semibold">$1.2M</p>
                </div>
              </div>
              <div className="mt-6">
                <div className="h-2 bg-[rgba(0,0,0,0.05)] dark:bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
                  <div className="h-full bg-[var(--pastel-green)]" style={{ width: '60%', animation: 'growWidth 1.5s ease-out forwards' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-2">
                  <span>이용률</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center fade-in delay-400">
          <Link href="/market" className="link-button shine">
            모든 마켓 보기
          </Link>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section className="py-10">
        <h2 className="text-2xl font-bold mb-10 text-center fade-in">Portal Trade의 주요 기능</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 fade-in delay-100">
            <div className="w-16 h-16 rounded-full bg-[var(--pastel-blue)] mx-auto mb-4 flex items-center justify-center pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">자산 공급</h3>
            <p className="opacity-70">암호화폐 자산을 예치하고 실시간으로 이자를 받으세요.</p>
          </div>
          <div className="text-center p-6 fade-in delay-200">
            <div className="w-16 h-16 rounded-full bg-[var(--pastel-pink)] mx-auto mb-4 flex items-center justify-center pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M10.464 8.746c.227-.18.497-.311.786-.394v2.795a2.252 2.252 0 01-.786-.393c-.394-.313-.546-.681-.546-1.004 0-.323.152-.691.546-1.004zM12.75 15.662v-2.824c.347.085.664.228.921.421.427.32.579.686.579.991 0 .305-.152.671-.579.991a2.534 2.534 0 01-.921.42z" />
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v.816a3.836 3.836 0 00-1.72.756c-.712.566-1.112 1.35-1.112 2.178 0 .829.4 1.612 1.113 2.178.502.4 1.102.647 1.719.756v2.978a2.536 2.536 0 01-.921-.421l-.879-.66a.75.75 0 00-.9 1.2l.879.66c.533.4 1.169.645 1.821.75V18a.75.75 0 001.5 0v-.81a4.124 4.124 0 001.821-.749c.745-.559 1.179-1.344 1.179-2.191 0-.847-.434-1.632-1.179-2.191a4.122 4.122 0 00-1.821-.75V8.354c.29.082.559.213.786.393l.415.33a.75.75 0 00.933-1.175l-.415-.33a3.836 3.836 0 00-1.719-.755V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">대출 서비스</h3>
            <p className="opacity-70">담보를 제공하고 필요한 자금을 빌리세요. 유연한 상환 조건을 제공합니다.</p>
          </div>
          <div className="text-center p-6 fade-in delay-300">
            <div className="w-16 h-16 rounded-full bg-[var(--pastel-purple)] mx-auto mb-4 flex items-center justify-center pulse">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">보안 최우선</h3>
            <p className="opacity-70">스마트 컨트랙트 감사와 보안 프로토콜로 자산을 안전하게 보호합니다.</p>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-10 bg-gradient-to-r from-[var(--pastel-blue)] to-[var(--pastel-pink)] rounded-3xl p-10 text-[var(--foreground)] gradient-animate">
        <h2 className="text-2xl font-bold mb-10 text-center fade-in">플랫폼 통계</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card backdrop-blur-sm bg-white/50 dark:bg-black/30 p-6 text-center fade-in delay-100">
            <p className="text-sm opacity-70 mb-2">전체 예치 자산</p>
            <p className="text-3xl font-bold">$10.2M</p>
          </div>
          <div className="card backdrop-blur-sm bg-white/50 dark:bg-black/30 p-6 text-center fade-in delay-200">
            <p className="text-sm opacity-70 mb-2">전체 대출 자산</p>
            <p className="text-3xl font-bold">$5.8M</p>
          </div>
          <div className="card backdrop-blur-sm bg-white/50 dark:bg-black/30 p-6 text-center fade-in delay-300">
            <p className="text-sm opacity-70 mb-2">활성 사용자</p>
            <p className="text-3xl font-bold">2,487</p>
          </div>
          <div className="card backdrop-blur-sm bg-white/50 dark:bg-black/30 p-6 text-center fade-in delay-400">
            <p className="text-sm opacity-70 mb-2">지원 자산</p>
            <p className="text-3xl font-bold">12</p>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-10 text-center">
        <h2 className="text-2xl font-bold mb-4 fade-in">지금 시작하세요</h2>
        <p className="opacity-70 mb-8 max-w-2xl mx-auto fade-in delay-100">
          Portal Trade에서 암호화폐 자산을 활용하여 이자를 받거나 필요한 자금을 빌리세요.
          간단한 지갑 연결만으로 시작할 수 있습니다.
        </p>
        <button className="btn-primary shine fade-in delay-200">지갑 연결하기</button>
      </section>
    </div>
  );
}
