"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { MessageSquarePlus, RefreshCw, Send } from "lucide-react";
import { type BoardPost, isSupabaseConfigured, supabase } from "@/lib/supabase";

const categories = ["계열제 평가", "계열제 보완", "전공신설", "기타"] as const;

type FormState = {
  author_name: string;
  affiliation: string;
  category: (typeof categories)[number];
  body: string;
  trap: string;
};

const initialForm: FormState = {
  author_name: "",
  affiliation: "",
  category: "계열제 평가",
  body: "",
  trap: ""
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("ko-KR", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  }).format(new Date(value));
}

export function FreeBoard() {
  const [posts, setPosts] = useState<BoardPost[]>([]);
  const [form, setForm] = useState<FormState>(initialForm);
  const [loading, setLoading] = useState(false);
  const [posting, setPosting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const remaining = useMemo(() => 1200 - form.body.length, [form.body.length]);

  const loadPosts = async () => {
    if (!supabase) return;

    setLoading(true);
    setError(null);

    const { data, error: loadError } = await supabase
      .from("hanshin_board_posts")
      .select("id, author_name, affiliation, category, body, created_at")
      .order("created_at", { ascending: false })
      .limit(30);

    if (loadError) {
      setError("게시글을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } else {
      setPosts((data ?? []) as BoardPost[]);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const submitPost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(null);
    setError(null);

    if (!supabase) {
      setError("게시판 연결 정보가 아직 설정되지 않았습니다.");
      return;
    }

    if (form.trap) {
      return;
    }

    const author = form.author_name.trim();
    const affiliation = form.affiliation.trim();
    const body = form.body.trim();

    if (!author || body.length < 5) {
      setError("이름과 5자 이상의 의견을 입력해 주세요.");
      return;
    }

    if (body.length > 1200) {
      setError("의견은 1200자 이내로 입력해 주세요.");
      return;
    }

    setPosting(true);

    const { error: insertError } = await supabase.from("hanshin_board_posts").insert({
      author_name: author,
      affiliation: affiliation || null,
      category: form.category,
      body,
      status: "published"
    });

    if (insertError) {
      setError("등록에 실패했습니다. 입력 내용을 확인하고 다시 시도해 주세요.");
    } else {
      setForm(initialForm);
      setMessage("의견이 등록되었습니다.");
      await loadPosts();
    }

    setPosting(false);
  };

  if (!isSupabaseConfigured) {
    return (
      <section className="board-section" id="participation">
        <div className="board-heading">
          <span className="kicker">자유게시판</span>
          <h2>게시판 연결 정보가 필요합니다.</h2>
          <p>Supabase 환경변수를 설정하면 의견 작성과 목록 조회가 활성화됩니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="board-section" id="participation">
      <div className="board-heading">
        <div>
          <span className="kicker">자유게시판</span>
          <h2>입장보다 근거를 남깁니다.</h2>
          <p>
            의견은 공개 게시글로 등록됩니다. 개인정보, 비방, 확인되지 않은 개인 신상은 쓰지 않는 것을
            원칙으로 합니다.
          </p>
        </div>
        <button className="refresh-button" type="button" onClick={loadPosts} disabled={loading}>
          <RefreshCw aria-hidden="true" size={17} />
          새로고침
        </button>
      </div>

      <div className="board-layout">
        <form className="board-form" onSubmit={submitPost}>
          <div className="form-title">
            <MessageSquarePlus aria-hidden="true" size={22} />
            <strong>의견 작성</strong>
          </div>

          <label className="field-label">
            이름
            <input
              value={form.author_name}
              maxLength={40}
              onChange={(event) => setForm((prev) => ({ ...prev, author_name: event.target.value }))}
              placeholder="이름 또는 표시명"
              required
            />
          </label>

          <label className="field-label">
            소속
            <input
              value={form.affiliation}
              maxLength={80}
              onChange={(event) => setForm((prev) => ({ ...prev, affiliation: event.target.value }))}
              placeholder="전공, 부서, 학번 등 선택 입력"
            />
          </label>

          <label className="field-label">
            주제
            <select
              value={form.category}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, category: event.target.value as FormState["category"] }))
              }
            >
              {categories.map((category) => (
                <option key={category}>{category}</option>
              ))}
            </select>
          </label>

          <label className="field-label">
            의견
            <textarea
              value={form.body}
              maxLength={1200}
              onChange={(event) => setForm((prev) => ({ ...prev, body: event.target.value }))}
              placeholder="쟁점, 근거, 추가로 확인해야 할 자료를 적어 주세요."
              required
            />
          </label>

          <label className="hidden-field" aria-hidden="true">
            비워두세요
            <input
              tabIndex={-1}
              name="website"
              autoComplete="off"
              value={form.trap}
              onChange={(event) => setForm((prev) => ({ ...prev, trap: event.target.value }))}
            />
          </label>

          <div className="form-footer">
            <span className={remaining < 0 ? "over-limit" : ""}>{remaining}자 남음</span>
            <button className="submit-link" type="submit" disabled={posting}>
              <Send aria-hidden="true" size={17} />
              {posting ? "등록 중" : "등록"}
            </button>
          </div>

          {message ? <p className="form-message success">{message}</p> : null}
          {error ? <p className="form-message error">{error}</p> : null}
        </form>

        <div className="post-list" aria-live="polite">
          {loading && posts.length === 0 ? <p className="empty-post">게시글을 불러오는 중입니다.</p> : null}
          {!loading && posts.length === 0 ? <p className="empty-post">아직 등록된 의견이 없습니다.</p> : null}
          {posts.map((post) => (
            <article className="post-card" key={post.id}>
              <div className="post-meta">
                <span>{post.category}</span>
                <time dateTime={post.created_at}>{formatDate(post.created_at)}</time>
              </div>
              <p>{post.body}</p>
              <div className="post-author">
                <strong>{post.author_name}</strong>
                {post.affiliation ? <span>{post.affiliation}</span> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
