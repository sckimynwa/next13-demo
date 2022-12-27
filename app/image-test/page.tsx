import Test from './child.client';

export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          Next Image Test
        </h1>
        <Test />
      </div>
    </div>
  );
}
