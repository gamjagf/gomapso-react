import "./App.css";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      {/* 상단 네비게이션 */}
      <header className="navbar">
        <div className="logo" onClick={() => scrollToSection("home")}>
          고맙소 카페
        </div>

        <nav className="nav-menu">
          <button onClick={() => scrollToSection("story")}>소개</button>
          <button onClick={() => scrollToSection("space")}>공간</button>
          <button onClick={() => scrollToSection("menu")}>메뉴</button>
          <button onClick={() => scrollToSection("location")}>오시는 길</button>
        </nav>
      </header>

      {/* 메인 히어로 */}
      <section id="home" className="hero">
        <div className="hero-card fade-in">
          <p className="eyebrow">THANKFUL COFFEE SPACE</p>
          <h1>마음을 쉬어가는 따뜻한 공간, 고맙소 카페</h1>
          <p className="hero-text">
            커피 한 잔에 감사의 마음을 담고, 사람과 사람이 머무는 시간을 만듭니다.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => scrollToSection("story")}>
              카페 소개 보기
            </button>
            <button className="secondary-btn" onClick={() => scrollToSection("location")}>
              오시는 길
            </button>
          </div>
        </div>
      </section>

      {/* 브랜드 스토리 */}
      <section id="story" className="section">
        <p className="section-label">BRAND STORY</p>
        <h2>감사의 마음이 머무는 이름, 고맙소</h2>
        <p className="section-text">
          고맙소 카페는 단순히 커피를 마시는 공간을 넘어, 서로의 하루를
          따뜻하게 나누는 지역 커뮤니티 공간입니다. “고맙소”라는 이름에는
          찾아주신 모든 분께 전하는 감사와 정성의 마음이 담겨 있습니다.
        </p>
      </section>

      {/* 공간 소개 */}
      <section id="space" className="section soft-bg">
        <p className="section-label">OUR SPACE</p>
        <h2>편안함과 품격을 함께 담은 공간</h2>

        <div className="card-grid">
          <div className="info-card">
            <span>☕</span>
            <h3>조용한 대화 공간</h3>
            <p>차분한 분위기에서 커피와 대화를 즐길 수 있는 공간입니다.</p>
          </div>

          <div className="info-card">
            <span>📚</span>
            <h3>소모임·강의 공간</h3>
            <p>스터디, 강의, 지역 모임을 위한 따뜻한 커뮤니티 공간입니다.</p>
          </div>

          <div className="info-card">
            <span>🕯️</span>
            <h3>따뜻한 감성</h3>
            <p>부드러운 조명과 편안한 색감으로 마음의 여유를 전합니다.</p>
          </div>
        </div>
      </section>

      {/* 대표 메뉴 */}
      <section id="menu" className="section">
        <p className="section-label">SIGNATURE MENU</p>
        <h2>고맙소 카페 대표 메뉴</h2>

        <div className="menu-grid">
          <div className="menu-card">
            <h3>아메리카노</h3>
            <p>깊고 깔끔한 풍미의 기본 커피</p>
          </div>

          <div className="menu-card">
            <h3>카페라떼</h3>
            <p>부드러운 우유와 에스프레소의 조화</p>
          </div>

          <div className="menu-card">
            <h3>수제차</h3>
            <p>계절의 향을 담은 따뜻한 차</p>
          </div>

          <div className="menu-card">
            <h3>디저트</h3>
            <p>커피와 함께 즐기는 달콤한 여유</p>
          </div>
        </div>
      </section>

      {/* 이용 안내 */}
      <section className="section soft-bg">
        <p className="section-label">USE GUIDE</p>
        <h2>이용 안내</h2>

        <div className="guide-box">
          <p>✔ 조용한 모임 가능</p>
          <p>✔ 강의 및 스터디 가능</p>
          <p>✔ 예약 문의 가능</p>
        </div>
      </section>

      {/* 오시는 길 */}
      <section id="location" className="section location">
        <p className="section-label">LOCATION</p>
        <h2>오시는 길</h2>
        <p className="section-text">경남 창원시 진해구</p>

        <button
          className="primary-btn"
          onClick={() => window.open("https://maps.google.com", "_blank")}
        >
          구글지도 열기
        </button>
      </section>

      {/* 푸터 */}
      <footer className="footer">
        © 2026 고맙소 카페. All rights reserved.
      </footer>
    </div>
  );
}

export default App;