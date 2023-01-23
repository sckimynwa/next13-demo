import { Bitter, Homemade_Apple, Inter, Noto_Sans_KR } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const bitter = Bitter({ subsets: ['latin'] });
const notoSans = Noto_Sans_KR({ subsets: ['latin'], weight: ['400', '700'] });
const homemadeApple = Homemade_Apple({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">Next Font Test</h1>
        <div className={homemadeApple.className}>
          Homemade Apple (Not a Variable Font)
        </div>
        <div className={inter.className}>Inter Font (Variable Font)</div>
        <div className={bitter.className}>Bitter Font (Variable Font)</div>
        <div className={notoSans.className}>
          Noto Sans Font (Not a Variable Font)
        </div>
      </div>
    </div>
  );
}
