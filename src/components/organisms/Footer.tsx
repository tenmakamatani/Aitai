import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="footer-list">
          <li>
            <a href="mailto:info@supota.com">お問い合わせ</a><span>/</span>
            <Link href="/privacy">プライバシーポリシー</Link><span>/</span>
            <Link href="/terms">利用規約</Link>
          </li>
        </ul>
        <p className="footer_copyright">©︎2020 SUPOTA Inc.</p>
      </div>
    </footer>
  );
};
