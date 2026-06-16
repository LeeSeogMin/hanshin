#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
비전공자용 '쉬운 그림' — 같은 충격, 다른 결과 (한신대 vs 평택대 경쟁률).

목적: 방법론 용어(SDID·합성대조군·τ·플라시보) 없이, 두 선의 '모양'만으로
"둘 다 2022 급락(전국 공통 충격) → 평택은 회복, 한신만 계속 하락"을 즉시 전달.
공개 웹 evaluation 페이지 본문 그림. 평택은 공개 공시 경쟁률만 사용(민감 맥락 배제).

입력: docs/입시결과분석/경쟁률_연도별비교.csv (대학알리미 공시).
출력: web/public/images/competition-recovery.svg
순수 SVG(한글폰트 보장·재현가능). 3시점(2021·2022·2026)만 써서 단순화.
"""
from __future__ import annotations
import csv
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSV = ROOT / "docs/입시결과분석/경쟁률_연도별비교.csv"
OUT = ROOT / "web/public/images/competition-recovery.svg"
W, H = 1180, 720
YEARS = [2021, 2022, 2026]  # 적성 전 · 공통충격 · 현재


def txt(s, x, y, size=18, color="#202323", weight=400, anchor="start"):
    return (f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{color}" '
            f'font-weight="{weight}" text-anchor="{anchor}">{escape(s)}</text>')


def line(points, color, width=3, dash=None):
    da = f' stroke-dasharray="{dash}"' if dash else ""
    d = " ".join(f"{x:.1f},{y:.1f}" for x, y in points)
    return f'<polyline points="{d}" fill="none" stroke="{color}" stroke-width="{width}"{da} stroke-linecap="round" stroke-linejoin="round"/>'


def dot(x, y, color, r=8):
    return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{color}" stroke="white" stroke-width="3"/>'


def load(label):
    with open(CSV, encoding="utf-8") as f:
        for r in csv.reader(f):
            if r and r[0] == label:
                d = {2016 + i: (float(v) if v.strip() else None) for i, v in enumerate(r[1:])}
                return d
    raise KeyError(label)


def main():
    han = load("한신대학교")
    ptk = load("평택대학교")

    P = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">',
         '<style>text{font-family:Apple SD Gothic Neo,Malgun Gothic,Noto Sans KR,Arial,sans-serif;}</style>',
         f'<rect x="0" y="0" width="{W}" height="{H}" fill="#ffffff"/>',
         txt("같은 충격, 다른 결과", W / 2, 56, 32, "#1b1f1e", 800, "middle"),
         txt("한신대와 비슷한 조건의 평택대 — 입시 경쟁률(지원자÷모집인원)", W / 2, 90, 17, "#5b6360", 400, "middle")]

    gx, gy, gw, gh = 150, 150, W - 300, 380
    y_min, y_max = 4.0, 10.0

    def sx(i):
        return gx + i / (len(YEARS) - 1) * gw

    def sy(v):
        return gy + (y_max - v) / (y_max - y_min) * gh

    # y 격자
    for tk in [4, 6, 8, 10]:
        yy = sy(tk)
        P.append(line([(gx, yy), (gx + gw, yy)], "#ece9e0", 1.5))
        P.append(txt(f"{tk}", gx - 16, yy + 5, 14, "#9aa19d", 400, "end"))
    # x 라벨
    xlabels = ["2021\n(적성고사 폐지 직전)", "2022\n(전국 공통 충격)", "2026\n(현재)"]
    for i, lab in enumerate(xlabels):
        xx = sx(i)
        P.append(line([(xx, gy), (xx, gy + gh)], "#f3f1ea", 1.5))
        parts = lab.split("\n")
        P.append(txt(parts[0], xx, gy + gh + 34, 18, "#3a403d", 700, "middle"))
        P.append(txt(parts[1], xx, gy + gh + 58, 14, "#8a918d", 400, "middle"))

    # 2022 공통충격 표식
    P.append(txt("← 둘 다 급락: 2022년 전국에서 적성고사가 사라진 영향(계열제와 무관)",
                 sx(1) + 16, gy + 28, 15, "#b07a1e", 700, "start"))

    # 선
    hp = [(sx(i), sy(han[y])) for i, y in enumerate(YEARS)]
    pp = [(sx(i), sy(ptk[y])) for i, y in enumerate(YEARS)]
    P.append(line(pp, "#1f9d8a", 4))
    P.append(line(hp, "#e05a4f", 4))
    for (x, y), v in zip(pp, [han if False else ptk[yy] for yy in YEARS]):
        P.append(dot(x, y, "#1f9d8a"))
    for (x, y), v in zip(hp, [han[yy] for yy in YEARS]):
        P.append(dot(x, y, "#e05a4f"))

    # 끝점 값 + 이름
    P.append(txt(f"평택대  {ptk[2026]:.1f}", pp[-1][0] + 16, pp[-1][1] + 2, 19, "#157567", 800))
    P.append(txt("↑ 거의 회복", pp[-1][0] + 16, pp[-1][1] + 26, 15, "#157567", 600))
    P.append(txt(f"한신대  {han[2026]:.1f}", hp[-1][0] + 16, hp[-1][1] + 2, 19, "#c0392b", 800))
    P.append(txt("↓ 계속 하락", hp[-1][0] + 16, hp[-1][1] + 26, 15, "#c0392b", 600))
    # 시작점 값
    P.append(txt(f"{ptk[2021]:.1f}", pp[0][0] - 16, pp[0][1] + 5, 16, "#157567", 700, "end"))
    P.append(txt(f"{han[2021]:.1f}", hp[0][0] - 16, hp[0][1] + 20, 16, "#c0392b", 700, "end"))

    # 하단 한 줄 메시지
    P.append(f'<rect x="60" y="{H-92}" width="{W-120}" height="64" rx="12" fill="#fbf6ec" stroke="#ecdfc4"/>')
    P.append(txt("평택은 돌아왔지만, 한신은 돌아오지 못했습니다.",
                 W / 2, H - 60, 18, "#7a5a12", 800, "middle"))
    P.append(txt("이 차이는 한신이 2023년에 바꾼 것 — 계열제를 가리킵니다.",
                 W / 2, H - 36, 15, "#8a7240", 400, "middle"))

    P.append("</svg>")
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text("\n".join(P), encoding="utf-8")
    print("OUT:", OUT)
    print(f"한신 2021/2022/2026: {han[2021]}/{han[2022]}/{han[2026]}")
    print(f"평택 2021/2022/2026: {ptk[2021]}/{ptk[2022]}/{ptk[2026]}")


if __name__ == "__main__":
    main()
