import Container from "./Container";
import Image from "next/image";

const Reviews = () => {
  return (
    <Container>
      <div className="text-gray-600 light:text-gray-300" id="reviews">
        <div className="m-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 light:text-white md:text-4xl">
            We have some <span className="text-primary"> fans.</span>
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-4 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Daniella Doe
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              A different perspective, your reaction and how you take it
              matters!
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-1.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Michael Johnson
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Marketing
                </p>
              </div>
            </div>
            <p className="mt-8">
              I think most people here don't even need to do the math. Most of
              us are 5's. If you are higher than that, trust me, you'll already
              know
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-2.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Jennifer Smith
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              I am 4.6. But at least I had 2 girls who told they like me. Even
              though I have an awkward personality and social anxiety.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-3.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Christopher Williams
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              One thing to note is that even if you’re a 7 or an 8, If you don't
              have confidence and you're not able to afford taking care of
              another person, you might as well be a 6 or a 5. Confidence,
              wealth, and network, are also highly valued factors in the dating
              market.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar-4.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Matthew Davis
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Manager
                </p>
              </div>
            </div>
            <p className="mt-8">
              Super interesting! It kinda helped me to see what I can improve
              and seems accurate with my current dating experience even if I
              don’t really care about it (I never had to “chase” a girl because
              they just come talk to me first). 8 face, 5 height, 8 body = 7.1.
              If I can still grow to at least 5’10 and go to a lower bf% it
              would be perfect for me. Thank you again bro.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white light:bg-gray-800 light:border-gray-700 shadow-2xl shadow-gray-600/10 light:shadow-none">
            <div className="flex gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/images/avatars/avatar.webp"
                  alt="user avatar"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                  loading="lazy"
                />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-700 light:text-white">
                  Sarah Anderson
                </h6>
                <p className="text-sm text-gray-500 light:text-gray-300">
                  Mobile dev
                </p>
              </div>
            </div>
            <p className="mt-8">
              I got a 5.5, and I think this scale is pretty good bro. But,
              another huge thing is personality. Dating for me is definitely
              medium, but I've had a lot of girls hit me up first. And I feel
              like if another 5.5 was super awkward their experience would not
              be the same.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Reviews;
