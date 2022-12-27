import { Inter, Noto_Sans, Bitter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });
const notoSans = Noto_Sans({ subsets: ['latin'], weight: ['400', '700'] });
const bitter = Bitter({ subsets: ['latin'] });

export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">Next Font Test</h1>
        <div className={inter.className}>Inter Font (Variable Font)</div>
        <div className={bitter.className}>Bitter Font (Variable Font)</div>
        <div className={notoSans.className}>
          Noto Sans Font (Not a Variable Font)
        </div>
      </div>
    </div>
  );
}
