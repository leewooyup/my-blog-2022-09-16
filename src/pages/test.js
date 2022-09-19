import { Link } from "gatsby";
import React from "react";

function TestPage() {
  return (
    <main>
      <title>테스트</title>
      <div style={{ display: "flex", gap: 20 }}>
        <Link to="/">홈</Link>
        <Link to="/about">어바웃</Link>
        <Link to="/test">테스트</Link>
        <Link to="/test-space">테스트스페이스</Link>
      </div>
      <h1>테스트 페이지입니다.</h1>
    </main>
  );
}

export default TestPage;
