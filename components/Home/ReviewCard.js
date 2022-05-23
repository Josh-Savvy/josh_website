const ReviewCard = () => {
  return (
    <div className="mt-32 duration-200 p-6">
      <div className="bg-gray-300 dark:bg-zinc-800 py-4 px-1 md:pr-10 rounded-3xl">
        <div className="grid md:grid-cols-2">
          <div className="p-3 flex justify-center">
            <img
              src="/static/assets/img/blog-author.jpg"
              className="duration-300 bg-rose-300 dark:bg-red-300 rounded-3xl"
              alt=""
            />
          </div>
          <div className="pl-5">
            <div className="flex justify-between">
              <div>
                <h3 className="md:text-3xl text-lg font-bold dark:text-zinc-100 text-zinc-800">
                  120
                  <span className="text-green-600 font-bold">
                    <i className="bx bx-plus font-bold"></i>
                  </span>
                </h3>
                <p className="text-zinc-600 md:text-lg text-sm dark:text-zinc-100">
                  Completed Projects
                </p>
              </div>
              <div className="mr-12">
                <h3 className="md:text-3xl text-lg font-bold dark:text-zinc-100 text-zinc-800">
                  B+
                </h3>
                <p className="text-zinc-600 md:text-lg text-sm dark:text-zinc-100">
                  Positive Reviews
                </p>
              </div>
            </div>
            <div className="md:mt-10 mt-5">
              <h3 className="md:text-4xl text-xl font-semibold dark:text-zinc-100 text-black">
                Glad to Help you!
              </h3>
              <p className="dark:text-zinc-100 text-black mt-5">
                As a proficient JavaScript developer, I work closely with my clients to
                define, design and develop transformative user experiences
                across all platforms and brand’s touchpoints.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
