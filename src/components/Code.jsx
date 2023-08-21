import { Element } from "react-scroll";

const ShareCode = () => {
  return (
    <Element
      name="code"
      className="flex flex-col items-center justify-center mt-8 h-screen bg-purple-300 dark:bg-purple-700 overflow-hidden"
    >
      <h2 className="text-2xl font-semibold mb-4">
        Baxdığınız səhifənin kodları
      </h2>
      <div className="w-full md:w-[80%] mx-auto mt-4">
        <iframe
          title="CodeSandbox Example"
          src="https://codesandbox.io/p/sandbox/awesome-nobel-v27n9n?embed=1"
          className="w-[96%] mx-auto h-[670px] md:w-full md:h-[670px]"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
      </div>
    </Element>
  );
};

export default ShareCode;
