import { useState } from "react";
import QRCode from "react-qr-code";

const QrGenerator = () => {
  const [input, setInput] = useState<string>("");
  const [qrcode, setQrcode] = useState<string>("");

  function handlGenerateQrCode(): void {
    setQrcode(input);
    setInput("");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black p-2">
      <h1 className="mb-2 text-4xl font-bold text-white">
        Qr code <span className="text-teal-400">Generator</span>
      </h1>
      <div className="mt-5 h-[550px] w-[500px] rounded-2xl bg-gray-400 p-8 text-black">
        <div className="mb-2 flex justify-evenly">
          <input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            placeholder="Enter ..."
            className="rounded-lg border-none bg-gray-700 p-2 text-xl text-white outline-none placeholder:text-gray-300"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handlGenerateQrCode}
            className="cursor-pointer rounded-lg border-none bg-teal-600 px-8 py-2 text-xl font-medium text-gray-200 outline-none hover:text-gray-300 active:scale-95"
          >
            Generate
          </button>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <QRCode size={400} value={qrcode} bgColor="#fff" />
        </div>
      </div>
    </div>
  );
};

export default QrGenerator;
