import Image from 'next/image';

const Test = () => {
  return (
    <div className="space-y-2">
      <div className="flex space-x-2">
        <Image
          src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
          className="rounded-full"
          width={300}
          height={300}
          alt="User"
        />
        <Image
          priority
          src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
          className="rounded-full"
          width={300}
          height={300}
          alt="User"
        />
      </div>
    </div>
  );
};

export default Test;
